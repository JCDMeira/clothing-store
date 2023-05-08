import { create } from "zustand";
import { ProductCreateModel, ProductModel } from "../model";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
} from "../Api";

type Store = {
  products: ProductModel[];
  product: ProductModel;
  getOneProduct: (id: string) => void;
  getProducts: () => void;
  deletProduct: (id: string) => void;
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
  deletProduct: async (id: string) => {
    deleteProduct(id).then(() =>
      set((state) => {
        const newProducts = state.products.filter(
          (product) => product._id !== id
        );

        return { products: [...newProducts] };
      })
    );
  },
}));
