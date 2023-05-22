import React, { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { useProductsStore } from "../../../../../Stores";
import { useLocation, useParams } from "react-router-dom";
import { ProductModel } from "../../../../../model";
import { TextField } from "@mui/material";
import { InputNumer } from "../../../../../Components";
import * as S from "../../../styled";

const defaultFormValues = {
  title: "",
  price: "",
};

//!todo: adicionar possibilidade de excluir um elemento do array de set ou modifiers

export const Modifiers: React.FC = () => {
  const { state } = useLocation();
  const { id } = useParams<{ id: string }>();
  const Product: ProductModel = state?.product;

  const editProduct = useProductsStore((state) => state.editProduct);
  const product = useProductsStore((state) => state.product);
  const getOneProduct = useProductsStore((state) => state.getOneProduct);

  const [currentModifiers, setCurrentModifiers] = useState(
    Product?.modifiers || []
  );

  const [formModifiers, SetFormModifiers] = useState(defaultFormValues);

  useEffect(() => {
    if (!state?.product && id !== product?._id) {
      getOneProduct(id as string);
    }
    if (product?._id && !state?.product) setCurrentModifiers(product.modifiers);
  }, [getOneProduct, id, product, state?.product]);

  const onChange = useCallback(
    ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) =>
      SetFormModifiers((current) => ({ ...current, [name]: value })),
    []
  );

  const onSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();

      if (
        formModifiers.title === "" ||
        formModifiers.price === "" ||
        formModifiers.price === "0.00"
      )
        return;

      const newProduct = !state?.product
        ? {
            ...product,
            modifiers: [
              ...product.modifiers,
              {
                title: formModifiers.title,
                price: Number(formModifiers.price),
              },
            ],
          }
        : {
            ...Product,
            modifiers: [
              ...Product.modifiers,
              {
                title: formModifiers.title,
                price: Number(formModifiers.price),
              },
            ],
          };

      editProduct(newProduct);

      window.history.pushState({ ...newProduct }, "", undefined);

      setCurrentModifiers((current) => [
        ...current,
        { title: formModifiers.title, price: Number(formModifiers.price) },
      ]);

      SetFormModifiers(defaultFormValues);
    },
    [Product, editProduct, formModifiers, product, state?.product]
  );

  const deleteSet = (index: number) => {
    setCurrentModifiers((current) => {
      const newMod = current.filter((_, i) => i !== index);
      editProduct({ ...product, sets: newMod });
      window.history.pushState({ ...product, sets: newMod }, "", undefined);

      return newMod;
    });
  };

  return (
    <>
      <S.StyledForm onSubmit={onSubmit}>
        <TextField
          label="Título"
          name="title"
          variant="outlined"
          value={formModifiers.title}
          onChange={onChange}
        />
        <TextField
          name={"price"}
          label={"Preço"}
          value={formModifiers.price}
          onChange={onChange}
          id="formatted-numberformat-input"
          InputProps={{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            inputComponent: InputNumer as any,
          }}
          variant="outlined"
        />
        <button type="submit">Adicionar conjunto</button>
      </S.StyledForm>

      <S.ListWrapper>
        <h2 style={{ margin: "24px 48px" }}>Modificações comuns</h2>
        {currentModifiers.map((mod, index) => (
          <div key={mod.title + mod.price + Math.random()}>
            <span style={{ margin: "10px 48px" }}>
              {mod.title} - R$ {mod.price.toFixed(2)}
            </span>
            <S.MinimalButton onClick={() => deleteSet(index)}>
              delete
            </S.MinimalButton>
          </div>
        ))}
      </S.ListWrapper>
    </>
  );
};
