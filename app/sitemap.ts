import type { MetadataRoute } from "next";
import { clients, projects } from "@/content/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL;
  if (!origin) return [];
  return [
    "",
    "/about",
    "/services",
    "/clients",
    "/work",
    "/gallery",
    "/contact",
    ...clients.map((c) => `/clients/${c.slug}`),
    ...projects.map((p) => `/work/${p.slug}`),
  ].map((path) => ({
    url: `${origin}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
