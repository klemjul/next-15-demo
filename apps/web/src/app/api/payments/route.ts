import { readPayments } from "@/actions/payments";

export async function GET() {
  const products = await readPayments();
  return new Response(JSON.stringify(products), { status: 200 });
}
