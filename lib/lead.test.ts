import test from "node:test";
import assert from "node:assert/strict";

import { parseLeadPayload } from "./lead";

test("aceita payload válido com consentimento explícito", () => {
  const result = parseLeadPayload({
    name: "Maria",
    email: "maria@email.com",
    phone: "11999999999",
    consent: true,
    source: "landing",
    utm_source: "newsletter",
  });

  assert.equal(result.success, true);
  if (result.success) {
    assert.equal(result.data.name, "Maria");
    assert.equal(result.data.consent, true);
  }
});

test("rejeita payload sem consentimento", () => {
  const result = parseLeadPayload({
    name: "Maria",
    email: "maria@email.com",
    consent: false,
  });

  assert.equal(result.success, false);
});

test("ignora honeypot preenchido como bot", () => {
  const result = parseLeadPayload({
    name: "Maria",
    email: "maria@email.com",
    consent: true,
    company: "spam",
  });

  assert.equal(result.success, true);
  if (result.success) {
    assert.equal(result.data.company, "spam");
  }
});
