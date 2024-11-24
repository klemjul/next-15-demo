import { readProducts } from "../api/products/actions";
import ProductList from "@/components/product-list";

export default async function ProductsPage() {
  const products = await readProducts();
  return <ProductList products={products} />;
}
