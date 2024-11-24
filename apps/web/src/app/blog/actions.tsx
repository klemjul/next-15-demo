"use server";

import { readdir, readFile } from "fs/promises";
import { join } from "path";
import { z } from "zod";
import sanitizeHtml from "sanitize-html";
import { marked } from "marked";

const BlogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
});

export type BlogPost = z.infer<typeof BlogPostSchema>;

export async function getPostNames() {
  return await readdir(join(process.cwd(), "data", "blog"));
}

export async function getPostHtml(slug: string) {
  const postMd = await readFile(
    join(process.cwd(), "data", "blog", `${slug}.md`),
    "utf-8",
  );
  return sanitizeHtml(await marked.parse(postMd));
}
