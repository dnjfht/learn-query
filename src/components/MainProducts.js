import React, { useState } from "react";
import Products from "./Products";
import { useQueryClient } from "@tanstack/react-query";

export default function MainProducts() {
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);

  const client = useQueryClient();
  // react-query에서 client 가져오기
  // 어플리케이션에서 QueryClientProvider라는 우산을 쓰고 있는 모든 자식 컴포넌트들에서
  // useQueryClient를 이용해서 client를 가지고 올 수 있다.

  return (
    <main style={{ display: "flex" }}>
      <div>
        {showLeftProducts && <Products />}
        <button onClick={() => setShowLeftProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <div>
        {showRightProducts && <Products />}
        <button onClick={() => setShowRightProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <button
        onClick={() => {
          client.invalidateQueries(["products", false]);
          // cach key는 products, false만 invalidate해달라고 명령.(data를 업데이트)
          // button을 누르는 순간 caching이 일어나면서 데이터가 업데이트 된다.
        }}
      >
        정보가 업데이트 되었음!
      </button>
    </main>
  );
}
