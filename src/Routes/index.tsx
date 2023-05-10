import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Product, ProductDetail } from "../Pages";
import { ProductAdmin } from "../Pages/ProductAdmin";
import { CreateProduct, EditProduct } from "../Pages/ProductAdmin/pages";

export const RouteSelect = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/admin">
          <Route path="" element={<ProductAdmin />} />
          <Route path="create" element={<CreateProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
