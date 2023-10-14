import React, { useState } from "react";
import styled from "styled-components";

const Products = (props) => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const addToCart = (id) => {
    const findProduct = props.products.find((p) => p.id === id);
    props.setCart([
      ...props.cart,
      {
        id: findProduct.id,
        title: findProduct.title,
        price: findProduct.price,
        color: color,
        size: size,
      },
    ]);
  };

  return (
    <Container>
      <h1>Products</h1>
      <div className="products">
        {props.products.map((p) => {
          return (
            <div className="card">
              <h1> title: {p.title}</h1>
              <p>price: {p.price}</p>
              <Color>
                {p.colors.map((c) => {
                  return <C color={c} onClick={() => setColor(c)}></C>;
                })}
              </Color>
              <div className="sizes">
                {p.size.map((s) => {
                  return <p onClick={() => setSize(s)}>{s}</p>;
                })}
              </div>
              <button onClick={() => addToCart(p.id)}>Add To Cart</button>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Products;

const Container = styled.div``;

const Color = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const C = styled.div`
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
`;
