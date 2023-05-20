import React, { useState } from "react";
import useProducts from "../hooks/use-products";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });
  // salesOnly인지 아닌지를 checked라는 상태값으로 전달해줄 것임.

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  if (loading) return <p>Loading...</p>;
  // loading 중이면 Loading 문구를
  if (error) return <p>{error}</p>;
  // error가 떴으면 error 문구를
  return (
    <div>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
