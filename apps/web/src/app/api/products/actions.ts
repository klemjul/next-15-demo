import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import { ProductSchema, CreateProduct } from "./model";

let nextid = 31;

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

export async function addProduct(product: CreateProduct) {
  const products = await readProducts();
  const newProduct = { id: nextid++, product };
  await writeFile(
    join(process.cwd(), "data", "products.json"),
    JSON.stringify([...products, newProduct]),
  );
  return newProduct;
}
