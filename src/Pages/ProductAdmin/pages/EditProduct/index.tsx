import React from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/base/Tabs";
import * as S from "./styles";
import { Info, Modifiers, Sets } from "./components";
import { S_Header, S_Wrapper } from "../../../../styles/components";
import * as SF from "../../styled";

export const EditProduct: React.FC = () => {
  const navigate = useNavigate();

  return (
    <S_Wrapper>
      <S_Header>
        <h1>Editar produto</h1>

        <SF.StyledButton onClick={() => navigate("/admin")}>
          Voltar
        </SF.StyledButton>
      </S_Header>

      <Tabs defaultValue={0} style={{ marginTop: "48px" }}>
        <S.StyledTabsList>
          <S.StyledTab value={0}>Informações gerais</S.StyledTab>
          <S.StyledTab value={1}>Conjuntos promocionais</S.StyledTab>
          <S.StyledTab value={2}>Moficações comuns</S.StyledTab>
        </S.StyledTabsList>

        <S.StyledTabPanel value={0}>
          <Info />
        </S.StyledTabPanel>

        <S.StyledTabPanel value={1}>
          <Sets />
        </S.StyledTabPanel>

        <S.StyledTabPanel value={2}>
          <Modifiers />
        </S.StyledTabPanel>
      </Tabs>
    </S_Wrapper>
  );
};
