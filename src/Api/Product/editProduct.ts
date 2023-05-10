import { api } from "..";
import { ProductModel } from "../../model";

export const editProduct = async (body: ProductModel) => {
  const { data } = await api.put<{
    message: string;
  }>(`/product/${body._id}`, body);
  return data;
};
