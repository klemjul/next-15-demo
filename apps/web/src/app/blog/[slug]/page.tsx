import { notFound } from "next/navigation";
import { getPostHtml, getPostNames } from "../actions";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 10;

// Control what happens when a dynamic segment is visited that was not generated with generateStaticParams.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const postPaths = await getPostNames();
  return postPaths.map((p) => ({ slug: p.split(".")[0] }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return {
    title: `Blog - ${(await params).slug}`,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = await getPostHtml(slug);
    return (
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: post }} />
    );
  } catch {
    notFound();
  }
}
