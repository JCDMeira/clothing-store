import React, { useEffect } from "react";
import { useProductsStore } from "../../Stores";

export const ProductAdmin: React.FC = () => {
  const products = useProductsStore((state) => state.products);
  const getProducts = useProductsStore((state) => state.getProducts);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      <h1>admin</h1>

      {products.map((product) => (
        <h1 key={product._id}>{product.title}</h1>
      ))}
    </div>
  );
};
