import { Routes, Route } from "react-router-dom";

import Home from "../client-site/pages/home";
import ProductList from "../client-site/pages/ProductList";
import ProductDetail from "../client-site/pages/productdetail";
import Cart from "../client-site/pages/cart";
import Login from "../client-site/pages/Login";
import Register from "../client-site/pages/Register";
import DashboardHome from "../dashboatd/pages/DashboardHome";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id"element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />}/>
      <Route path="/admin" element={<DashboardHome />}/>
    </Routes>
  );
}
