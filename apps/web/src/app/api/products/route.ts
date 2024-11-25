import { readProducts } from "@/actions/products";

export async function GET() {
  const products = await readProducts();
  return new Response(JSON.stringify(products), { status: 200 });
}
