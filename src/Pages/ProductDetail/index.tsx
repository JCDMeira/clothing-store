import React, { useEffect } from "react";
import { useProductsStore } from "../../Stores";
import { Link, useParams } from "react-router-dom";
import { Title } from "../../Components";
import { S_Header, S_Wrapper } from "../../styles/components";
import * as S from "./styles";

export const ProductDetail: React.FC = () => {
  const product = useProductsStore((state) => state.product);
  const getOneProduct = useProductsStore((state) => state.getOneProduct);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getOneProduct(id as string);
  }, [getOneProduct, id]);

  console.log(product);

  return (
    <S_Wrapper>
      <S_Header>
        <Link to={"/products"} className="breadcrumb">
          {`< Voltar`}
        </Link>
        <Title variant={"h1"}>
          {product.title} - id: {product._id}
        </Title>
      </S_Header>

      <S.ProductDetail>
        <S.ImageContainer>
          <img src={product.photo} alt={product.title} />
        </S.ImageContainer>

        <h1>R$: {product?.price?.toFixed(2)}</h1>

        <S.Container>
          <h1>Conjuntos possíveis</h1>
          {product.sets?.map((set) => (
            <h2>
              {set.title} - R$: {set.price.toFixed(2)}
            </h2>
          ))}
        </S.Container>

        <S.Container>
          <h1>Modificações comuns</h1>
          {product.modifiers?.map((mod) => (
            <h2>
              {mod.title} - R$: {mod.price.toFixed(2)}
            </h2>
          ))}
        </S.Container>
      </S.ProductDetail>
    </S_Wrapper>
  );
};
