"use server";

import { ProductSchema } from "@/lib/model";
import { readFile } from "fs/promises";
import { join } from "path";

export async function readProducts() {
  const raw = await readFile(
    join(process.cwd(), "data", "products.json"),
    "utf-8",
  );
  const products = ProductSchema.array().parse(JSON.parse(raw));
  return products;
}

export async function readProduct(id: number) {
  const products = await readProducts();
  return products.find((p) => p.id === id);
}
