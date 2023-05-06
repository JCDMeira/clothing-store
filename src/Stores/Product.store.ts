import { create } from "zustand";
import { ProductCreateModel, ProductModel } from "../model";
import { createProduct, getOneProduct, getProducts } from "../Api";

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
  createProduct: async (body: ProductCreateModel) => {
    createProduct(body).then((res) => {
      set((state) => ({ products: [...state.products, res] }));
    });
  },
}));
