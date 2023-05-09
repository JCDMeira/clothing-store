import { api } from "..";
import { ProductCreateModel, ProductModel } from "../../model";

export const createProduct = async (body: ProductCreateModel) => {
  const { data } = await api.post<{
    message: string;
    product: ProductModel;
  }>("/product", body);
  return data;
};
