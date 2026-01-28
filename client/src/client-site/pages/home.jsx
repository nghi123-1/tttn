import "../styles/home.css";
import "../styles/product.css";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/productApi";
import ProductCard from "../../components/ProductCard";
import Banner from "../components/banner";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) =>
      setProducts(res.data)
    );
  }, []);

  return (
    <>
      <Banner />

      <div className="container">
        <h2>New Arrivals</h2>

        <div className="grid">
          {products.map((p) => (
            <ProductCard
              key={p.product_id}
              product={p}
            />
          ))}
        </div>
      </div>
    </>
  );
}
