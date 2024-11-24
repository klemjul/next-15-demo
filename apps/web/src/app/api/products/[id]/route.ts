import { NextResponse } from "next/server";
import { readProducts } from "../actions";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const products = await readProducts();
  const productId = (await params).id;
  const product = products.find((p) => p.id === Number(productId));
  if (product) {
    return NextResponse.json(product);
  }
  return new Response(null, { status: 404 });
}
