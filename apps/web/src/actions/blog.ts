"use server";

import { join } from "path";
import sanitizeHtml from "sanitize-html";
import { marked } from "marked";
import { readdir, readFile } from "fs/promises";

export async function getPostNames() {
  return readdir(join(process.cwd(), "data", "blog"));
}

export async function getPostHtml(slug: string) {
  const postMd = await readFile(
    join(process.cwd(), "data", "blog", `${slug}.md`),
    "utf-8",
  );
  return sanitizeHtml(await marked.parse(postMd));
}
