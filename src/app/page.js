"use client";

import styles from "./page.module.css";

import { useState, useEffect } from "react";

import ProductItem from "@/components/ProductItem";

export default function Home() {
  const [products, setProducts] = useState(null);
  const [deletedProducts, setDeletedProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("სერვერიდან მონაცემები ვერ წამოვიდა");
        }
        return response.json();
      })
      .then((result) => setProducts(result.products))
      .catch((error) => {
        console.error("Fetch error:", error);
        alert("შეცდომაა: " + error.message);
      });
  }, []);

  const handleDelete = (id) => {
    const targetProducts = products.find((item) => item.id == id);

    if (targetProducts) {
      setDeletedProducts([...deletedProducts, targetProducts]);

      const updatedProducts = products.filter((item) => item.id !== id);
      setProducts(updatedProducts);
    }
  };

  if (products === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.page}>
      <h1>პროდუქტების სია ({products.length})</h1>
      <div style={{ display: "grid", gap: "16px", marginBottom: "40px" }}>
        {products.map((item) => (
          <ProductItem key={item.id} product={item} onDelete={handleDelete} />
        ))}
      </div>

      {deletedProducts.length > 0 && (
        <div style={{ borderTop: "2px red dashed", paddingTop: "20px" }}>
          <h2>წაშლილი პროდუქტები ({deletedProducts.length})</h2>
          <div style={{ display: "grid", gap: "16px" }}>
            {deletedProducts.map((item) => (
              <ProductItem key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
