import { api } from "..";
import { ProductCreateModel, ProductModel } from "../../model";

export const createProduct = async (body: ProductCreateModel) => {
  const { data } = await api.post<ProductModel>("/product", body);
  return data;
};
