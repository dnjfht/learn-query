import "./App.css";
import MainProducts from "./components/MainProducts";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// react-query에서 client 가져오기
const queryClient = new QueryClient();
// client 초기화

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* QueryClientProvider로 어플리케이션 감싸기 => 우산 씌워주기 */}
      <MainProducts />
    </QueryClientProvider>
  );
}

export default App;
