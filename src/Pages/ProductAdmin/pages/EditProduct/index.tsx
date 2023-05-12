import React from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/base/Tabs";
import * as S from "./styles";
import { Info } from "./components/Info";
import { Sets } from "./components/sets";

export const EditProduct: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Editar produto</h1>

      <button onClick={() => navigate("/admin")}>Voltar</button>

      <Tabs defaultValue={0}>
        <S.StyledTabsList>
          <S.StyledTab value={0}>Informações gerais</S.StyledTab>
          <S.StyledTab value={1}>Conjuntos promocionais</S.StyledTab>
          <S.StyledTab value={2}>Alterações</S.StyledTab>
        </S.StyledTabsList>
        <S.StyledTabPanel value={0}>
          <Info />
        </S.StyledTabPanel>
        <S.StyledTabPanel value={1}>
          <Sets />
        </S.StyledTabPanel>
        <S.StyledTabPanel value={2}>Language page</S.StyledTabPanel>
      </Tabs>
    </div>
  );
};
