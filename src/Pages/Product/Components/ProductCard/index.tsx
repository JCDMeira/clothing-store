import React from "react";
import { ProductModel } from "../../../../model";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Title } from "../../../../Components";

type ProductCardProps = {
  product: ProductModel;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <S.CardWrapper onClick={() => navigate(`${product._id}`)}>
      <S.Photo>
        <img src={product.photo} alt={product.title} />
      </S.Photo>
      <Title variant={"h2"}>{product.title}</Title>
      <Title variant={"h3"}>${product.price}</Title>
    </S.CardWrapper>
  );
};
