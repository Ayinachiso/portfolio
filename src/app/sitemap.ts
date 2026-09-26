import type { MetadataRoute } from "next";
import { primaryRoutes } from "@/lib/routes";
import { projects } from "@/lib/projects";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

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
