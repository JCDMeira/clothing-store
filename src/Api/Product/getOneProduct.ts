import { api } from "..";
import { ProductModel, ProductsFormated } from "../../model";

export const getOneProduct = async (id: string): Promise<ProductsFormated> => {
  const { data } = await api.get<ProductModel>(`/product/${id}`);

  const formatedData = {
    ...data,
    formatedPrice: `R$ ${data.price.toFixed(2)}`,
    title: data.title[0].toUpperCase() + data.title.substr(1),
  };

  return formatedData;
};
