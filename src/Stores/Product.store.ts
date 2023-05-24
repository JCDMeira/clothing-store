import { create } from "zustand";
import { ProductCreateModel, ProductModel, ProductsFormated } from "../model";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getOneProduct,
  getProducts,
} from "../Api";

type Store = {
  products: ProductsFormated[];
  product: ProductsFormated;
  getOneProduct: (id: string) => void;
  getProducts: () => void;
  createProduct: (body: ProductCreateModel) => Promise<ProductsFormated>;
  editProduct: (body: ProductModel) => Promise<void>;
  deletProduct: (id: string) => void;
};

export const useProductsStore = create<Store>()((set) => ({
  products: [],
  product: {} as ProductsFormated,
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

    set((state) => ({ products: [...state.products, newProduct] }));

    return newProduct;
  },
  editProduct: async (body: ProductModel) => {
    await editProduct(body);

    set((state) => {
      const newProduct = {
        ...body,
        formatedPrice: `R$ ${body.price.toFixed(2)}`,
        title: body.title[0].toUpperCase() + body.title.substr(1),
      };
      const newProducts = state.products.map((prod) =>
        prod._id === body._id
          ? newProduct
          : {
              ...prod,
              formatedPrice: `R$ ${prod.price.toFixed(2)}`,
              title: prod.title[0].toUpperCase() + prod.title.substr(1),
            }
      );
      return { products: [...newProducts], product: newProduct };
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
