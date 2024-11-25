## SSR (Server Side Rendering)

```tsx
// src/app/product/[id]/page.tsx  - (Dynamic), on demand because no SSG and cannot predict ids
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await readProduct(Number(id));
  if (!product) return notFound();

  return <Card className="m-4">...</Card>;
}
```

<br/>

### Caractéristiques principales

- Contenu dynamique et personnalisé
- Pages dynamiques indexées (SEO)
- Chaque requête solicite le serveur, plus lent
- Contenu toujours a jour (!= SSG, ISR)

<style>
ul {
  font-size: 0.8em; 
  font-weight: 300;
}
</style>
