import React, { SyntheticEvent, useState } from "react";
import { useProductsStore } from "../../../../../Stores";
import { useLocation } from "react-router-dom";
import { ProductModel } from "../../../../../model";
import { TextField } from "@mui/material";
import { InputNumer } from "../../../../../Components";

export const Sets: React.FC = () => {
  const { state } = useLocation();
  // const { id } = useParams<{ id: string }>();
  const Product: ProductModel = state.product;

  const editProduct = useProductsStore((state) => state.editProduct);
  // const product = useProductsStore((state) => state.product);
  // const getOneProduct = useProductsStore((state) => state.getOneProduct);

  // useEffect(() => {
  //   if (!state?.product) getOneProduct(id as string);
  // }, [getOneProduct, id, state?.product]);

  const [currentSets, setCurrentSet] = useState(Product?.sets);
  const [formSets, SetFormSets] = useState({
    title: "",
    price: "",
  });

  const onChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    SetFormSets((current) => ({ ...current, [name]: value }));

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (
      formSets.title === "" ||
      formSets.price === "" ||
      formSets.price === "0.00"
    )
      return;

    editProduct({
      ...Product,
      sets: [
        ...Product.sets,
        { title: formSets.title, price: Number(formSets.price) },
      ],
    });

    window.history.pushState(
      { ...Product, sets: [...currentSets, formSets] },
      "",
      undefined
    );

    setCurrentSet((current) => [
      ...current,
      { title: formSets.title, price: Number(formSets.price) },
    ]);
  };

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
          <h1>
            {set.title} - R$ {set.price.toFixed(2)}
          </h1>
        ))}
      </div>
    </div>
  );
};
