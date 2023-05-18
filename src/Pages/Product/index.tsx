import React, { useEffect } from "react";

import { useProductsStore } from "../../Stores";
import { ProductCard } from "./Components";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { Title } from "../../Components";
import { S_Header, S_Wrapper } from "../../styles/components";

export const Product: React.FC = () => {
  const products = useProductsStore((state) => state.products);
  const getProducts = useProductsStore((state) => state.getProducts);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <S_Wrapper>
      <S_Header>
        <Link to={"/"} className="breadcrumb">
          {`< Voltar`}
        </Link>
        <Title variant={"h1"}>Produtos</Title>
      </S_Header>

      <S.ContentWrapper>
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </S.ContentWrapper>
    </S_Wrapper>
  );
};
