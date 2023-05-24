import { api } from "..";
import { ProductModel, ProductsFormated } from "../../model";

export const getProducts = async (): Promise<ProductsFormated[]> => {
  const { data } = await api.get<ProductModel[]>("/product");

  const formatedData = data.map((product) => ({
    ...product,
    formatedPrice: `R$ ${product.price.toFixed(2)}`,
    title: product.title[0].toUpperCase() + product.title.substr(1),
  }));

  return formatedData;
};
