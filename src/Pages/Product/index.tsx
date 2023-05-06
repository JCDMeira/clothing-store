import React, { useEffect } from "react";

import { useProductsStore } from "../../Stores";
import { ProductCard } from "./components/ProductCard";

export const Product: React.FC = () => {
  const products = useProductsStore((state) => state.products);
  const getProducts = useProductsStore((state) => state.getProducts);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      <h1>Produtos</h1>

      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};
