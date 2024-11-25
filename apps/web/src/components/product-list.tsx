"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Product } from "@/lib/model";

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <>
      <Input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="block py-4"
          >
            <div className="flex items-center">
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {product.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>
              <div className="ml-auto font-medium">${product.price}</div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </>
  );
};

export default ProductList;
