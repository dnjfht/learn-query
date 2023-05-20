import React, { useState } from "react";
// import useProducts from "../hooks/use-products";
import { useQuery } from "@tanstack/react-query";

export default function Products() {
  // 네트워크와 통신하는 컴포넌트는 Products이기 때문에 여기서 react-query를 사용.
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], async () => {
    console.log("fetching...");
    return fetch(`data/products.json`).then((res) => res.json());
  });
  // useQuery를 호출하면 어떤 객체를 return해 주는데, 객체 안에는 다양한 key들이 있다.
  // const {data,dataUpdatedAt, error, errorUpdatedAt, failureCount, isError, isFetched, isFetchedAfterMount, isFetching, isIdle, isLoading, isLoadingError, isPlaceholderData, isPreviousData, isRefetchError, isRefetching, isStale, isSuccess, refetch, remove, status,}
  // useQuery에 queryKey와 어떻게, 어디서 데이터를 읽어와야 하는지 query함수를 전달해줘야 한다.
  // 세 번째 함수 인자로는 option을 전달할 수 있다.(ex: 얼마 동안 caching을 할 건지, enabled 되었는지 안되었는지, initialData 등...)

  const [checked, setChecked] = useState(false);
  // const [loading, error, products] = useProducts({ salesOnly: checked });
  // salesOnly인지 아닌지를 checked라는 상태값으로 전달해줄 것임.

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  if (isLoading) return <p>Loading...</p>;
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
