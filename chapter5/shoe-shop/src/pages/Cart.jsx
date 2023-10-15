import React from "react";
import styled from "styled-components";

const Cart = (props) => {
  const deleteFromCart = (id) => {
    const findItem = props.cart.find((el) => el.id === id);
    props.cart.splice(props.cart.indexOf(findItem), 1);
    props.setCart([...props.cart]);
  };

  return (
    <Container>
      <h1>Cart</h1>
      <div className="cart">
        {props.cart.map((c) => {
          return (
            <div className="cartItem">
              <img src={c.img} alt="" />
              <h1>{c.title}</h1>
              <p>{c.price}</p>
              <C c={c.color}></C>
              <p>{c.size}</p>
              <button onClick={() => deleteFromCart(c.id)}>
                Delete From Cart
              </button>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  .cart {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 40px;
    flex-wrap: wrap;
  }
`;

const C = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.c};
`;
