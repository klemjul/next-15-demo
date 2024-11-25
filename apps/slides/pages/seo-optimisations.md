## SEO Optimisation

```tsx
// Page or Layout metadata
// app/products/page.tsx
export const metadata: Metadata = {
  title: "...",
  description: "...",
};

// Dynamic metadata
// app/products/[id]/page.tsx
export async function generateMetadata(props, parent): Promise<Metadata> {}

// Generate a Robots file using code
// app/robots.ts
export default function robots(): MetadataRoute.Robots {}

// Generate a sitemap using code
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {}
```
