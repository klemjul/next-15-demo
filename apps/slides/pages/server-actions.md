## Server actions

```tsx
// src/app/products/1
export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await readProduct(Number(id));
  return (
    <Form action={addPayment}>
      <input type="hidden" name="price" value={product.price} />
      <Button type="submit">Checkout</Button>
    </Form>
  );
}
```

```tsx
// src/actions/payments.ts
"use server";
export async function addPayment(formData: FormData) {
  const newPayment = {
    id: randomUUID(),
    amount: Number(formData.get("price")),
  };
  const safePayment = PaymentSchema.parse(newPayment);

  await addPayments(safePayment);
  redirect("/products");
}
```
