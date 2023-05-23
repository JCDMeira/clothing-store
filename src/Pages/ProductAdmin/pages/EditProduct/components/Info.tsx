import React, {
  SyntheticEvent,
  lazy,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useProductsStore } from "../../../../../Stores";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ProductModel } from "../../../../../model";

import * as S from "../../../styled";

const InputNumer = lazy(() =>
  import("../../../../../Components").then(({ InputNumer }) => ({
    default: InputNumer,
  }))
);
const TextField = lazy(() =>
  import("@mui/material").then(({ TextField }) => ({
    default: TextField,
  }))
);

export const Info: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams<{ id: string }>();
  const Product: ProductModel = state?.product || {};

  const editProduct = useProductsStore((state) => state.editProduct);
  const product = useProductsStore((state) => state.product);
  const getOneProduct = useProductsStore((state) => state.getOneProduct);

  const [productForm, setProductForm] = useState(
    !state?.product
      ? ({} as ProductModel)
      : {
          ...Product,
          price: String(Product.price),
        }
  );

  useEffect(() => {
    if (!state?.product && id !== product?._id) {
      getOneProduct(id as string);
    }
    if (product?._id && !state?.product)
      setProductForm({ ...product, price: String(product.price) });
  }, [getOneProduct, id, product, state?.product]);

  const onChange = useCallback(
    ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) =>
      setProductForm((current) => ({ ...current, [name]: value })),
    []
  );

  const onSubmit = useCallback(
    (e: SyntheticEvent) => {
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
    },
    [editProduct, navigate, productForm]
  );

  return (
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
      <S.StyledButton type="submit">Editar</S.StyledButton>
    </S.StyledForm>
  );
};
