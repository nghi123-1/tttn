import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/productApi";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] =
    useState(null);

  useEffect(() => {
    getProductById(id).then((res) =>
      setProduct(res.data)
    );
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container">
      <img
        src={product.image_url}
        width="300"
      />

      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>{product.brand}</p>
    </div>
  );
}
