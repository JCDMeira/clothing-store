import { api } from "..";
import { ProductModel } from "../../model";

export const getOneProduct = async (id: string) => {
  const { data } = await api.get<ProductModel>(`/product/${id}`);

  const formatedData = {
    ...data,
    title: data.title[0].toUpperCase() + data.title.substr(1),
  };

  return formatedData;
};
