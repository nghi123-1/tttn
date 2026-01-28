import { Routes, Route } from "react-router-dom";

import Home from "../client-site/pages/Home";
import ProductList from "../client-site/pages/ProductList";
import ProductDetail from "../client-site/pages/ProductDetail";
import Cart from "../client-site/pages/Cart";
import Login from "../client-site/pages/Login";
import Register from "../client-site/pages/Register";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route
        path="/products/:id"
        element={<ProductDetail />}
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/register"
        element={<Register />}
      />
    </Routes>
  );
}
