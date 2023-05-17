import React from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../Components";
import * as S from "./styles";
import blazer from "../../Assets/blazer.avif";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Content>
        <S.Cloud>
          <div>
            <Title variant={"h1"}>
              Porque sua roupa sempre tem algo a contar
            </Title>
          </div>
        </S.Cloud>

        <S.ContrastWhite>
          E aqui, cada costura é uma história, e nós estamos prontos para contar
          a sua através das suas roupas personalizadas.
        </S.ContrastWhite>
      </S.Content>

      <S.Separate />

      <S.CtaWrapper img={blazer}>
        <div />
        <button onClick={() => navigate("/products")}>
          Conheça nossa linhas
        </button>
      </S.CtaWrapper>
    </S.Wrapper>
  );
};
