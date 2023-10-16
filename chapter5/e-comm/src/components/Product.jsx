import React, { useState } from "react";
import p1 from "../images/image-product-1.jpg";
import p2 from "../images/image-product-2.jpg";
import p3 from "../images/image-product-3.jpg";
import p4 from "../images/image-product-4.jpg";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
let images = [p1, p2, p3, p4];

const Product = () => {
  const cart = useSelector((props) => props.cart.cart);
  const [active, setActive] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addToCartT = () => {
    dispatch(
      addToCart({
        id: Math.random().toString(36).slice(2, 8),
        title: "product",
        quantity: quantity,
        img: images[0],
      })
    );
  };

  const inceDecQ = () => {
    setQuantity(quantity + 1);
  };

  console.log(cart);

  const decC = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  return (
    <>
      <Container>
        <Left>
          <ImgContainer onClick={() => setActive(true)}>
            {images.map((i) => {
              return <img src={i} alt="" />;
            })}
          </ImgContainer>
        </Left>
        <Right>
          <h3>SNEAKERS COMPANY</h3>
          <h1>FALL Limited Ediion Sneakers</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed velit
            eaque possimus sit, quibusdam enim. Expedita, iure. Obcaecati
            aspernatur ut dignissimos! Deserunt, consectetur eligendi cupiditate
            commodi officia quam aut vero.
          </p>
          <div className="prices">
            <h2>${quantity * 125.0}</h2>
            <span>50%</span>
          </div>
          <h5>$250.00</h5>
          <div className="buttons">
            <button onClick={decC}>-</button>
            <p>{quantity}</p>
            <button onClick={inceDecQ}>+</button>
            <button onClick={addToCartT}>Add To Cart</button>
          </div>
        </Right>
      </Container>
      <Pop_Up onClick={() => setActive(false)} active={active}>
        {images.map((i) => {
          return <img src={i} alt="" />;
        })}
      </Pop_Up>
    </>
  );
};

export default Product;

const Container = styled.div`
  display: flex;
  padding: 60px;
  height: 100vh;
  justify-content: center;
  gap: 60px;
`;
const Left = styled.div`
  width: 30%;
`;
const ImgContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  img {
    width: 100%;
  }
  img:nth-child(1) {
    grid-column: span 3;
  }
`;

const Pop_Up = styled.div`
  width: 30%;
  position: ${(props) => (props.active ? "fixed" : "static")};
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  display: ${(props) => (props.active ? "grid" : "none")};
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  background-image: rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
  }
  img:nth-child(1) {
    grid-column: span 3;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .buttons {
    display: flex;
    align-items: center;
    gap: 5px;
    button {
      padding: 5px 10px;
    }
  }
`;
