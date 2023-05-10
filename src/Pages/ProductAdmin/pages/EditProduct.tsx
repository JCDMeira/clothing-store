import { TextField } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { InputNumer } from "../../../Components";
import { useProductsStore } from "../../../Stores";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductModel } from "../../../model";

export const EditProduct: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const Product: ProductModel = state.product;

  const editProduct = useProductsStore((state) => state.editProduct);

  const [productForm, setProductForm] = useState({
    ...Product,
    price: String(Product.price),
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

    editProduct({
      ...productForm,
      price: Number(productForm.price),
    });
    navigate("/admin");
  };

  return (
    <div>
      <h1>Editar produto</h1>

      <button onClick={() => navigate("/admin")}>Voltar</button>

      <form onSubmit={onSubmit}>
        ''
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
        <button type="submit">Editar</button>
      </form>
    </div>
  );
};
