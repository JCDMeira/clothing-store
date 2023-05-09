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
  createProduct: (body: ProductCreateModel) => Promise<{
    message: string;
    product: ProductModel;
  }>;
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
    const newProduct = await createProduct(body);

    set((state) => ({ products: [...state.products, newProduct.product] }));

    return newProduct;
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
