## ISR (Incremental Static Regeneration)

```tsx
// src/app/products/page.tsx - (Static) revalidated every 30 seconds

export const revalidate = 30;

export default async function ProductsPage() {
  await wait(2000);
  const products = await readProducts();
  return <ProductList products={products} />;
}
```

<br/>

### Caractéristiques principales

- Combine les avantages du rendu statique et dynamique.
- Complexité, délais de revalidation
- Nécessite un environnement serveur pour gérer les mises à jour.

<style>
ul {
  font-size: 0.8em; 
  font-weight: 300;
}
</style>
