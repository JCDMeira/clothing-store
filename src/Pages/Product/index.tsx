import React, { useEffect } from "react";

import { useProductsStore } from "../../Stores";

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
        <p key={product._id}>{product.title}</p>
      ))}
    </div>
  );
};
