import { api } from "..";
import { ProductModel } from "../../model";

export const getOneProduct = async (id: string) => {
  const { data } = await api.get<ProductModel>(`/product/${id}`);

  return data;
};
