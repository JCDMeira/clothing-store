import React, { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { useProductsStore } from "../../../../../Stores";
import { useLocation, useParams } from "react-router-dom";
import { ProductModel, SetsAndModifiers } from "../../../../../model";
import { TextField } from "@mui/material";
import { InputNumer } from "../../../../../Components";

export const Sets: React.FC = () => {
  const { state } = useLocation();
  const { id } = useParams<{ id: string }>();
  const Product: ProductModel = state?.product || {};

  const editProduct = useProductsStore((state) => state.editProduct);
  const product = useProductsStore((state) => state.product);
  const getOneProduct = useProductsStore((state) => state.getOneProduct);

  const [currentSets, setCurrentSet] = useState(Product?.sets || []);

  const [formSets, SetFormSets] = useState({
    title: "",
    price: "",
  });

  useEffect(() => {
    if (!state?.product && id !== product?._id) {
      getOneProduct(id as string);
    }
    if (product?._id) setCurrentSet(product.sets);
  }, [getOneProduct, id, product, state?.product]);

  const onChange = useCallback(
    ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) =>
      SetFormSets((current) => ({ ...current, [name]: value })),
    []
  );

  const onSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();

      if (
        formSets.title === "" ||
        formSets.price === "" ||
        formSets.price === "0.00"
      )
        return;

      const newProduct = !state?.product
        ? {
            ...product,
            sets: [
              ...product.sets,
              { title: formSets.title, price: Number(formSets.price) },
            ],
          }
        : {
            ...Product,
            sets: [
              ...Product.sets,
              { title: formSets.title, price: Number(formSets.price) },
            ],
          };

      editProduct(newProduct);

      window.history.pushState({ ...newProduct }, "", undefined);

      setCurrentSet((current) => [
        ...current,
        { title: formSets.title, price: Number(formSets.price) },
      ]);
    },
    [Product, editProduct, formSets, product, state?.product]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          label="Título"
          name="title"
          variant="outlined"
          value={formSets.title}
          onChange={onChange}
        />
        <TextField
          name={"price"}
          label={"Preço"}
          value={formSets.price}
          onChange={onChange}
          id="formatted-numberformat-input"
          InputProps={{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            inputComponent: InputNumer as any,
          }}
          variant="outlined"
        />
        <button type="submit">Adicionar conjunto</button>
      </form>

      <div>
        {currentSets.map((set) => (
          <h1 key={set.title + set.price + Math.random()}>
            {set.title} - R$ {set.price.toFixed(2)}
          </h1>
        ))}
      </div>
    </div>
  );
};
