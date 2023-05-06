import React from "react";
import { ProductModel } from "../../../model";
import { useNavigate } from "react-router-dom";

// import { Container } from './styles';

type ProductCardProps = {
  product: ProductModel;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "orange",
        margin: "10px",
        cursor: "pointer",
      }}
      onClick={() => navigate(`${product._id}`)}
    >
      <h1>{product.title}</h1>
      <h1>{product.price}</h1>
    </div>
  );
};
