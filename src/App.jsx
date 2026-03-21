import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/Mainlayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Wishlist from "./pages/WishList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
