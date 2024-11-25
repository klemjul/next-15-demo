import { wait } from "@/lib/utils";
import ProductList from "@/components/product-list";
import { readProducts } from "../../actions/products";

// Next.js will invalidate the cache when a request comes in, at most once every 30 seconds.
export const revalidate = 30;

export default async function ProductsPage() {
  await wait(2000);
  const products = await readProducts();
  return <ProductList products={products} />;
}
