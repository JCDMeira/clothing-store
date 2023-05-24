import { api } from "..";
import {
  ProductCreateModel,
  ProductModel,
  ProductsFormated,
} from "../../model";

export const createProduct = async (
  body: ProductCreateModel
): Promise<ProductsFormated> => {
  const { data } = await api.post<{
    message: string;
    product: ProductModel;
  }>("/product", body);

  const newProduct = {
    ...data.product,
    formatedPrice: `R$ ${data.product.price.toFixed(2)}`,
    title: data.product.title[0].toUpperCase() + data.product.title.substr(1),
  };
  return newProduct;
};
