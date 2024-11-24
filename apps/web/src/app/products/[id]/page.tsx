import { readProduct } from "@/app/api/products/actions";
import { Button } from "@/components/ui/button";
import Form from "next/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { notFound } from "next/navigation";
import { addPayment } from "@/app/actions/payments/actions";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await readProduct(Number(id));

  if (!product) return notFound();

  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{product.title}</p>
        <p className="mt-2 text-gray-700">{product.description}</p>
        <p className="mt-4 text-lg font-semibold">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter>
        <Form action={addPayment}>
          <input type="hidden" name="price" value={product.price} />
          <Button type="submit">Checkout</Button>
        </Form>
      </CardFooter>
    </Card>
  );
}
