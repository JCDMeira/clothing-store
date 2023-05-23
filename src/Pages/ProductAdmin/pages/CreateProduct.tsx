import React, { SyntheticEvent, lazy, useState } from "react";
import { useProductsStore } from "../../../Stores";
import { useNavigate } from "react-router-dom";
import { S_Header, S_Wrapper } from "../../../styles/components";
import * as S from "../styled";

const TextField = lazy(() =>
  import("@mui/material").then(({ TextField }) => ({
    default: TextField,
  }))
);

const InputNumer = lazy(() =>
  import("../../../Components").then(({ InputNumer }) => ({
    default: InputNumer,
  }))
);

export const CreateProduct: React.FC = () => {
  const navigate = useNavigate();
  const createProduct = useProductsStore((state) => state.createProduct);

  const [productForm, setProductForm] = useState({
    title: "",
    photo: "",
    price: "",
  });

  const onChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setProductForm((current) => ({ ...current, [name]: value }));

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (
      productForm.title === "" ||
      productForm.price === "" ||
      productForm.price === "0.00"
    )
      return;

    createProduct({
      ...productForm,
      price: Number(productForm.price),
    });
    navigate("/admin");
  };

  return (
    <S_Wrapper>
      <S_Header>
        <h1>Cadastrar novo produto</h1>

        <S.StyledButton onClick={() => navigate("/admin")}>
          Voltar
        </S.StyledButton>
      </S_Header>

      <S.StyledForm onSubmit={onSubmit}>
        <TextField
          label="Título"
          name="title"
          variant="outlined"
          value={productForm.title}
          onChange={onChange}
        />
        <TextField
          label="Url da imagem"
          name="photo"
          variant="outlined"
          value={productForm.photo}
          onChange={onChange}
        />
        <TextField
          name={"price"}
          label={"Preço"}
          value={productForm.price}
          onChange={onChange}
          id="formatted-numberformat-input"
          InputProps={{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            inputComponent: InputNumer as any,
          }}
          variant="outlined"
        />
        <button type="submit">Cadastrar</button>
      </S.StyledForm>
    </S_Wrapper>
  );
};
