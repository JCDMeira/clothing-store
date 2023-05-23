import { lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSuspense } from "../hooks";
const Home = lazy(() =>
  import("../Pages").then(({ Home }) => ({ default: Home }))
);
const Product = lazy(() =>
  import("../Pages").then(({ Product }) => ({ default: Product }))
);
const ProductDetail = lazy(() =>
  import("../Pages").then(({ ProductDetail }) => ({ default: ProductDetail }))
);
const ProductAdmin = lazy(() =>
  import("../Pages/ProductAdmin").then(({ ProductAdmin }) => ({
    default: ProductAdmin,
  }))
);
const CreateProduct = lazy(() =>
  import("../Pages/ProductAdmin/pages").then(({ CreateProduct }) => ({
    default: CreateProduct,
  }))
);
const EditProduct = lazy(() =>
  import("../Pages/ProductAdmin/pages").then(({ EditProduct }) => ({
    default: EditProduct,
  }))
);

export const RouteSelect = () => {
  const { wrappInSuspense } = useSuspense();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={wrappInSuspense(<Home />)} />
        <Route path="/products" element={wrappInSuspense(<Product />)} />
        <Route
          path="/products/:id"
          element={wrappInSuspense(<ProductDetail />)}
        />

        <Route path="/admin">
          <Route path="" element={wrappInSuspense(<ProductAdmin />)} />
          <Route path="create" element={wrappInSuspense(<CreateProduct />)} />
          <Route path="edit/:id" element={wrappInSuspense(<EditProduct />)} />
        </Route>
        <Route path="*" element={wrappInSuspense(<Home />)} />
      </Routes>
    </BrowserRouter>
  );
};
