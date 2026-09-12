const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const entries = new Map<string, RateLimitEntry>();

function cleanupExpired(now: number) {
  for (const [k, v] of entries) {
    if (v.resetAt <= now) entries.delete(k);
  }
}

export function checkRateLimit(key: string) {
  const now = Date.now();
  cleanupExpired(now);
  const current = entries.get(key);

  if (!current || current.resetAt <= now) {
    entries.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((current.resetAt - now) / 1000),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}