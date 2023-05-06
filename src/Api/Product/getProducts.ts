import { api } from "..";
import { ProductModel } from "../../model";

export const getProducts = async () => {
  const { data } = await api.get<ProductModel[]>("/product");

  return data;
};
