import { useEffect, useState } from "react";

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    // fetch("http://localhost:3001/products")
    // fetch("data/products.json")
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥 뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      })
      .catch((err) => setError("에러가 발생했습니다!"))
      .finally(() => setLoading(false));
    return () => {
      console.log("깨끗하게 청소하는 일들을 합니다.");
    };
  }, [salesOnly]);

  return [loading, error, products];
}
