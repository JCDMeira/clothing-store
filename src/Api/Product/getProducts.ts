import { api } from "..";
import { ProductModel } from "../../model";

export const getProducts = async () => {
  const { data } = await api.get<ProductModel[]>("/product");

  const formatedData = data.map((product) => ({
    ...product,
    title: product.title[0].toUpperCase() + product.title.substr(1),
  }));

  return formatedData;
};
