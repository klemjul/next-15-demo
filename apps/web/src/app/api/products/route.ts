import { NextResponse } from "next/server";
import { ProductSchema } from "./model";
import { addProduct, readProducts } from "./actions";

export async function GET() {
  const products = await readProducts();
  return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json();
  const product = ProductSchema.omit({ id: true }).safeParse(body);

  if (!product.success) {
    return NextResponse.json({ errors: product.error.errors }, { status: 400 });
  }

  const newProduct = addProduct(product.data);
  return NextResponse.json(newProduct);
}
