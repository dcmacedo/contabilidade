#!/usr/bin/env node
import http from "http";
import { spawn } from "child_process";
import fs from "fs";
import path from "path";

const TARGET_URL = process.env.TARGET_URL || "https://planilhafinanceirafacil.net.br";

function fetchHtml(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

function parseMeta(html: string, name: string): string | null {
  const regex = new RegExp(
    `<meta[^>]*property="og:${name}"[^>]*content="([^"]*)"`,
    "i"
  );
  const match = html.match(regex);
  return match ? match[1] : null;
}

function parseMetaName(html: string, name: string): string | null {
  const regex = new RegExp(
    `<meta[^>]*name="twitter:${name}"[^>]*content="([^"]*)"`,
    "i"
  );
  const match = html.match(regex);
  return match ? match[1] : null;
}

function checkImageUrl(imgUrl: string): Promise<boolean> => {
  return new Promise((resolve) => {
    http
      .head(imgUrl, (res) => {
        resolve(res.statusCode >= 200 && res.statusCode < 400);
      })
      .on("error", () => resolve(false));
  });
};

async function main() {
  console.log(`Validando Open Graph em: ${TARGET_URL}\n`);

  // 1. Build the app first to render static HTML
  console.log("1. Iniciando build...");
  const build = spawn("npm", ["run", "build"], { stdio: "pipe" });
  let buildOutput = "";
  build.stdout.on("data", (data) => (buildOutput += data.toString()));
  build.stderr.on("data", (data) => (buildOutput += data.toString()));
  await new Promise((resolve) => build.on("close", resolve));

  if (buildOutput.includes("Error") || buildOutput.includes("error")) {
    console.error("❌ Build falhou. Não é possível validar.");
    process.exit(1);
  }
  console.log("✅ Build concluído.\n");

  // 2. Fetch the built HTML (home page)
  console.log("2. Buscando HTML da home page...");
  let html: string;
  try {
    html = await fetchHtml(TARGET_URL);
  } catch (err) {
    console.error("❌ Falha ao buscar HTML:", err);
    process.exit(1);
  }
  console.log("✅ HTML recuperado.\n");

  // 3. Validate OG tags
  console.log("3. Validando tags Open Graph...\n");

  const checks = [
    { name: "og:title", fn: parseMeta, expected: "Planilha de Fluxo de Caixa Avançado" },
    { name: "og:description", fn: parseMeta, expected: "Clareza total do dinheiro que entra e sai, decida com segurança todo mês." },
    { name: "og:url", fn: parseMeta, expected: TARGET_URL },
    { name: "og:type", fn: parseMeta, expected: "website" },
    { name: "og:site_name", fn: parseMeta, expected: "Planilha Financeira Fácil" },
    { name: "og:image", fn: parseMeta },
    { name: "twitter:card", fn: parseMetaName, expected: "summary_large_image" },
    { name: "twitter:title", fn: parseMetaName },
    { name: "twitter:description", fn: parseMetaName },
    { name: "twitter:image", fn: parseMetaName },
    { name: "canonical", (html: string) => {
      const regex = /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i;
      const match = html.match(regex);
      return match ? match[1] : null;
    }, expected: TARGET_URL },
  ];

  let allPassed = true;
  for (const check of checks) {
    const value = check.fn!(html);
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

  // 4. Validate OG image URL returns 200
  const ogImage = parseMeta(html, "og:image");
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

  // 5. Summary
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