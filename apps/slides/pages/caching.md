## Caching

```tsx
// route segments
export const revalidate = 10; // false | 0 | number
export const dynamic = true; // 'auto' | 'force-dynamic' | 'error' | 'force-static',

// from client or server
fetch(`https://...`, { next: { revalidate: 3600 } });
fetch(`https://...`, { next: { tags: ["a", "b", "c"] } });

// revalidating from a server action or an api route
revalidateTag("a");
revalidatePath("/");
```

<br />

> Depuis **Next.js 15**, le cache est désactivé par défaut. Les requêtes et pages dynamiques ne sont plus mises en cache automatiquement (fetch = `no-store`, route = `force-dynamic`).
