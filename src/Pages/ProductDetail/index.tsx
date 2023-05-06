import React, { useEffect } from "react";
import { useProductsStore } from "../../Stores";
import { Link, useParams } from "react-router-dom";

export const ProductDetail: React.FC = () => {
  const product = useProductsStore((state) => state.product);
  const getOneProduct = useProductsStore((state) => state.getOneProduct);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getOneProduct(id as string);
  }, [getOneProduct, id]);

  return (
    <div>
      <Link to={"/products"}>Voltar</Link>
      <h1>{product.title}</h1>
    </div>
  );
};
