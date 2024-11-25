## SSG (Server Side Generated)

```tsx
// src/app/blog/[slug]/page.tsx - (SSG) prerendered as static HTML at build time
export const revalidate = 10; // ISR
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const postPaths = await getPostNames();
  return postPaths.map((p) => ({ slug: p.split(".")[0] }));
}
export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostHtml(slug);
  if (!post) return notFound();
  return (
    <div className="blogpost" dangerouslySetInnerHTML={{ __html: post }} />
  );
}
```

<br />

### Caractéristiques principales

- Pages SEO avec contenu statique
- Temps de chargement le plus rapide, car tout est pré-rendu.
- Déploiement économique, aucun serveur nécessaire

<style>
ul {
  font-size: 0.8em; 
  font-weight: 300;
}
</style>
