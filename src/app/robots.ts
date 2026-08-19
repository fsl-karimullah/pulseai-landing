import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog", "/blog/"],
        disallow: ["/admin", "/admin/", "/api/"],
      },
    ],
    sitemap: "https://pulseai.biz.id/sitemap.xml",
    host: "https://pulseai.biz.id",
  };
}
