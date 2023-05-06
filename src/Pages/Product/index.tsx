import React, { useEffect, useState } from "react";

import { getProducts } from "../../Api";
import { ProductModel } from "../../model";

export const Product: React.FC = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();

      setProducts(products);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Produtos</h1>

      {products.map((product) => (
        <p>{product.title}</p>
      ))}
    </div>
  );
};
