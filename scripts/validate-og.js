#!/usr/bin/env node
import http from "http";
import https from "https";

const TARGET_URL = process.env.TARGET_URL || "https://pv.dcmacedo.com.br";

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const redirectUrl = new URL(res.headers.location, url).toString();
          return resolve(fetchHtml(redirectUrl));
        }
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

function parseMetaProperty(html, propertyName) {
  const regex = new RegExp(
    `<meta[^>]*property=["']${propertyName}["'][^>]*content=["']([^"']*)["']|<meta[^>]*content=["']([^"']*)["'][^>]*property=["']${propertyName}["']`,
    "i"
  );
  const match = html.match(regex);
  return match ? match[1] || match[2] : null;
}

function parseMetaName(html, nameAttr) {
  const regex = new RegExp(
    `<meta[^>]*name=["']${nameAttr}["'][^>]*content=["']([^"']*)["']|<meta[^>]*content=["']([^"']*)["'][^>]*name=["']${nameAttr}["']`,
    "i"
  );
  const match = html.match(regex);
  return match ? match[1] || match[2] : null;
}

function checkImageUrl(imgUrl) {
  return new Promise((resolve) => {
    const client = imgUrl.startsWith("https") ? https : http;
    client
      .head(imgUrl, (res) => {
        resolve(res.statusCode >= 200 && res.statusCode < 400);
      })
      .on("error", () => resolve(false));
  });
}

async function main() {
  console.log(`Validando Open Graph em: ${TARGET_URL}\n`);

  console.log("2. Buscando HTML da home page...");
  let html;
  try {
    html = await fetchHtml(TARGET_URL);
  } catch (err) {
    console.error("❌ Falha ao buscar HTML:", err);
    process.exit(1);
  }
  console.log("✅ HTML recuperado.\n");

  console.log("3. Validando tags Open Graph...\n");

  const expectedDomain = "pv.dcmacedo.com.br";

  const checks = [
    { name: "og:title", fn: (h) => parseMetaProperty(h, "og:title"), expected: "Planilha de Fluxo de Caixa Avançado" },
    { name: "og:description", fn: (h) => parseMetaProperty(h, "og:description"), expected: "Clareza total do dinheiro que entra e sai, decida com segurança todo mês." },
    { name: "og:url", fn: (h) => parseMetaProperty(h, "og:url"), expected: expectedDomain },
    { name: "og:type", fn: (h) => parseMetaProperty(h, "og:type"), expected: "website" },
    { name: "og:site_name", fn: (h) => parseMetaProperty(h, "og:site_name"), expected: "Planilha Financeira Fácil" },
    { name: "og:image", fn: (h) => parseMetaProperty(h, "og:image") },
    { name: "twitter:card", fn: (h) => parseMetaName(h, "twitter:card"), expected: "summary_large_image" },
    { name: "twitter:title", fn: (h) => parseMetaName(h, "twitter:title") },
    { name: "twitter:description", fn: (h) => parseMetaName(h, "twitter:description") },
    { name: "twitter:image", fn: (h) => parseMetaName(h, "twitter:image") },
    {
      name: "canonical",
      fn: (h) => {
        const regex = /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i;
        const match = h.match(regex);
        return match ? match[1] : null;
      },
      expected: expectedDomain,
    },
  ];

  let allPassed = true;
  for (const check of checks) {
    const value = check.fn(html);
    const hasValue = value !== null && value !== undefined && value !== "";
    const passes = check.expected
      ? hasValue && value.includes(check.expected)
      : hasValue;

    if (passes) {
      console.log(`✅ ${check.name}: "${value}"`);
    } else {
      console.log(`❌ ${check.name}: ${hasValue ? `"${value}"` : "não encontrado"}`);
      allPassed = false;
    }
  }

  const ogImage = parseMetaProperty(html, "og:image");
  if (ogImage) {
    console.log(`\n4. Validando URL da imagem (${ogImage})...`);
    const imageValid = await checkImageUrl(ogImage);
    if (imageValid) {
      console.log(`✅ Imagem acessível (status 200)`);
    } else {
      console.log(`❌ Imagem não acessível`);
      allPassed = false;
    }
  }

  console.log("\n" + "=".repeat(50));
  if (allPassed) {
    console.log("✅ TODAS AS VALIDAÇÕES PASSARAM");
    console.log("=".repeat(50));
    process.exit(0);
  } else {
    console.log("❌ ALGUMAS VALIDAÇÕES FALHARAM");
    console.log("=".repeat(50));
    process.exit(1);
  }
}

main();
