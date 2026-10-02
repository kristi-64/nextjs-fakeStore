"use client";

import styles from "./page.module.css";

import { useState, useEffect } from "react";

import ProductItem from "@/components/ProductItem";

export default function Home() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    setError(false);

    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("შეცდომა მონაცემების წამოღებისას");
        }

        return response.json();
      })

      .then((result) => {
        setProducts(result);

        setLoading(false);
      })

      .catch((err) => {
        console.error(err);

        setError(true);

        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>იტვირთება...</h2>;
  }

  if (error) {
    return <h2>შეცდომა</h2>;
  }

  return (
    <div className={styles.page}>
      {products?.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
}
