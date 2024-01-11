import { MetadataRoute } from "next";
import { getAllPosts } from "./_lib/post-utils";
import { Post } from "./_types/interfaces";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getAllPosts();

  const staticPages = [
    {
      url: "https://edgeinbusiness.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://edgeinbusiness.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://edgeinbusiness.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const dynamicPages = pages.data.map((page: Post) => {
    return {
      url: `https://edgeinbusiness/blog/${page.slug}`,
      lastModified: page.dateModified.split("T")[0],
      changeFrequency: "yearly",
      priority: 0.5,
    };
  });

  return [...staticPages, ...dynamicPages];
}
