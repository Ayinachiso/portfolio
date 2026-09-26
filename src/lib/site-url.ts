export function getSiteUrl(): string {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL?.trim(),
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.trim()}`
      : undefined,
    process.env.VERCEL_URL?.trim()
      ? `https://${process.env.VERCEL_URL.trim()}`
      : undefined,
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;

    try {
      const url = new URL(candidate);
      if (url.protocol === "https:" || url.protocol === "http:") {
        return url.origin;
      }
    } catch {
      // Ignore invalid configuration and try the deployment URL instead.
    }
  }

  return "http://localhost:3000";
}
