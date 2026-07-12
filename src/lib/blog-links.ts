export type BlogLink = {
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  href: string;
  source: "Substack";
  featured: boolean;
};

export const blogLinks: BlogLink[] = [
  {
    title: "Selected Substack article",
    summary: "A placeholder for a featured Substack essay. Replace this from the admin area when your Substack URL is ready.",
    category: "Engineering Notes",
    publishedAt: "Review needed",
    href: "https://substack.com/",
    source: "Substack",
    featured: true,
  },
];
