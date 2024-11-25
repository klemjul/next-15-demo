import { readProducts } from "@/actions/products";
import { wait } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  await wait(500);
  const products = await readProducts();
  const productId = (await params).id;
  const product = products.find((p) => p.id === Number(productId));
  if (product) {
    return NextResponse.json(product);
  }
  return new Response(null, { status: 404 });
}
