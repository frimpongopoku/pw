import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { PostData, PostFrontmatter, PostMeta } from "@/types/blog";

const blogDirectory = path.join(process.cwd(), "src/content/blog");

function normalizeFrontmatter(
  slug: string,
  frontmatter: Partial<PostFrontmatter>,
  content: string
): PostMeta {
  return {
    slug,
    title: frontmatter.title ?? "Untitled post",
    date: frontmatter.date ?? new Date(0).toISOString(),
    description: frontmatter.description ?? "No description provided.",
    tags: frontmatter.tags ?? [],
    published: frontmatter.published ?? false,
    coverImage: frontmatter.coverImage,
    readingTime: readingTime(content).text,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const filePath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContents);

      return normalizeFrontmatter(slug, data as Partial<PostFrontmatter>, content);
    })
    .filter((post) => post.published)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );
}

export function getLatestPosts(limit = 3): PostMeta[] {
  return getAllPosts().slice(0, limit);
}

export function getPostBySlug(slug: string): PostData | null {
  const filePath = path.join(blogDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);
  const meta = normalizeFrontmatter(
    slug,
    data as Partial<PostFrontmatter>,
    content
  );

  if (!meta.published) {
    return null;
  }

  return { meta, content };
}
