import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import ProductsPage from "./products/page";
import { Suspense } from "react";
import { SkeletonCard } from "@/components/skeleton-card";
import { getPostNames } from "../actions/blog";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const postNames = await getPostNames();

  return (
    <div>
      <Card className="mx-4 mt-4">
        <CardHeader>
          <h2>Last blog posts</h2>
        </CardHeader>
        <CardContent>
          <ul>
            {postNames.map((p) => {
              const postName = p.split(".")[0];
              return (
                <li key={postName}>
                  <Link href={`/blog/${postName}`}>{postName}</Link>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
      <Card className="m-4">
        <CardHeader>
          <h2>Last products</h2>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<SkeletonCard />}>
            <ProductsPage />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
