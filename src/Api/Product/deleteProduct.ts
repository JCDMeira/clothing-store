import { api } from "..";

export const deleteProduct = async (id: string) => {
  const { data } = await api.delete<{ message: string }>(`/product/${id}`);
  return data;
};
