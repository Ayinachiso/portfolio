import type { MetadataRoute } from "next";
import { primaryRoutes } from "@/lib/routes";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://builddesk-portfolio.workers.dev";

  return [
    ...primaryRoutes.map((route) => ({
      url: `${siteUrl}${route.href}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
