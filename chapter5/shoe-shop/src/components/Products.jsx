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
        id: Math.random().toString(36).substring(2, 8),
        title: findProduct.title,
        price: findProduct.price,
        img: findProduct.img,
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
              <img src={p.img} alt="" />
              <h1 className="title"> title: {p.title}</h1>
              <p>price: {p.price}</p>
              <Color>
                <h1>Colors:</h1>
                {p.colors.map((c) => {
                  return <C color={c} onClick={() => setColor(c)}></C>;
                })}
              </Color>
              <div className="sizes">
                <h1>size:</h1>
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

const Container = styled.div`
  height: 100%;
  padding: 80px;
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
  }
  .card {
    display: flex;
    padding: 10px;
    border-radius: 4px;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    height: 100%;
    background-color: #d7d7d7;

    img {
      width: 100%;
      height: 40vh;
      filter: drop-shadow(10px 10px rgba(0, 0, 0, 0.4));
    }
    .title {
      font-size: 18px;
    }
    button {
      padding: 10px;
      border-radius: 4px;
      background-color: #2e78c2;
      border: none;
      color: #fff;
      width: 60%;
      margin: 0 auto;
      cursor: pointer;
    }
  }

  .sizes {
    display: flex;
    align-items: center;
    gap: 3px;
    h1 {
      font-size: 16px;
    }

    p {
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

const Color = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  h1 {
    font-size: 16px;
  }
`;

const C = styled.div`
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
`;
