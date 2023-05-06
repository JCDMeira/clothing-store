import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Product } from "../Pages";

export const RouteSelect = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
