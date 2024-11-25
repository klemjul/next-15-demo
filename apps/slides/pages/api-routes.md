## API Routes

```tsx
// src/app/api/payments/route.ts
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
```

<br />

### Quelques cas d'usage

- BFF (Backend for Frontend)
- Logique backend simple, prototypage
- Proxy pour APIs tierces

<style>
ul {
  font-size: 0.8em; 
  font-weight: 300;
}
</style>
