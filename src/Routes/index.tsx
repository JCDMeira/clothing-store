import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../Pages";

export const RouteSelect = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
