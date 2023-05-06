import { create } from "zustand";
import { ProductModel } from "../model";
import { getOneProduct, getProducts } from "../Api";

type Store = {
  products: ProductModel[];
  product: ProductModel;
  getOneProduct: (id: string) => void;
  getProducts: () => void;
};

export const useProductsStore = create<Store>()((set) => ({
  products: [],
  product: {} as ProductModel,
  getProducts: async () => {
    const products = await getProducts();
    set({ products });
  },
  getOneProduct: async (id: string) => {
    const product = await getOneProduct(id);
    set({ product });
  },
}));
