import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { data } from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              setProducts={setProducts}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
