import Link from "next/link";
import { getPostNames } from "./actions";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 30;

export default async function BlogPage() {
  const postNames = await getPostNames();

  return (
    <>
      <h1>Last posts</h1>
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
    </>
  );
}
