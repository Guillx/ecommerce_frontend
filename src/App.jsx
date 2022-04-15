import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import ProductsList from "./pages/products-list/ProductsList";
import ProductPage from "./pages/product-page/ProductPage";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ShoppingCart from "./pages/shopping-cart/ShoppingCart";

const App = () => {
  const user = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products/:category" element={<ProductsList />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
