import { create } from "zustand";
import { ProductModel } from "../model";
import { getProducts } from "../Api";

type Store = {
  products: ProductModel[];
  getProducts: () => void;
};

export const useProductsStore = create<Store>()((set) => ({
  products: [],
  getProducts: async () => {
    const products = await getProducts();
    console.log(products);
    set({ products });
  },
}));
