import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";

const Home = (props) => {
  return (
    <div>
      <Header />
      <Products
        products={props.products}
        setProducts={props.setProducts}
        cart={props.cart}
        setCart={props.setCart}
      />
    </div>
  );
};

export default Home;
