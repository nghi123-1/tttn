import "../styles/product.css";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/productApi";
import ProductCard from "../../components/ProductCard";
import ProductFilter from "../components/productfilter";

export default function ProductList() {
  const [products, setProducts] =
    useState([]);

  useEffect(() => {
    getProducts().then((res) =>
      setProducts(res.data)
    );
  }, []);

  return (
    <div className="container">
      <ProductFilter />

      <div className="grid">
        {products.map((p) => (
          <ProductCard
            key={p.product_id}
            product={p}
          />
        ))}
      </div>
    </div>
  );
}
