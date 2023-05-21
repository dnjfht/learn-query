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
          client.invalidateQueries();
        }}
      >
        정보가 업데이트 되었음!
      </button>
    </main>
  );
}
