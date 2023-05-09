import { TextField } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { InputNumer } from "../../../Components";
import { useProductsStore } from "../../../Stores";
import { useNavigate } from "react-router-dom";

export const CreateProduct: React.FC = () => {
  const navigate = useNavigate();
  const createProduct = useProductsStore((state) => state.createProduct);

  const [productForm, setProductForm] = useState({ title: "", price: "" });

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
      title: productForm.title,
      price: Number(productForm.price),
    });
    navigate("/admin");
  };

  return (
    <div>
      <h1>Cadastrar novo produto</h1>

      <button onClick={() => navigate("/admin")}>Voltar</button>

      <form onSubmit={onSubmit}>
        <TextField
          label="Título"
          name="title"
          variant="outlined"
          value={productForm.title}
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
      </form>
    </div>
  );
};
