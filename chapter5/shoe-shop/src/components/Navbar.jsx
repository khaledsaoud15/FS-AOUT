import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <img src={logo} alt="" />
      <Media>
        <Pop className="cart-pop" active={active}>
          <Links>
            <NavLink to="/">
              <a>Home</a>
            </NavLink>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Blog</a>
            <a href="">Support</a>
          </Links>
          <Basket>
            <NavLink to="/cart">
              <img src={cart} alt="" />
            </NavLink>
            <p>{props.cart.length}</p>
          </Basket>
        </Pop>
        <div className="ham" onClick={() => setActive(!active)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Media>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 90px;
  height: 90px;
  img {
    height: 100%;
  }
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 999999;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  a {
    color: #000;
    text-decoration: none;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    padding: 15px;
  }
`;

const Pop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    background-color: #ccc;
    height: ${({ active }) => (active ? "45vh" : "0")};
    gap: 30px;
    overflow: hidden;
    transition: height 0.3s linear;
  }
`;

const Basket = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  img {
    height: 30px;
  }

  p {
    position: absolute;
    top: -50%;
    right: -10%;
    font-size: 18px;
  }
`;

const Media = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  .ham {
    cursor: pointer;
    display: none;
    flex-direction: column;
    gap: 4px;
    span {
      width: 20px;
      height: 1px;
      background: #000;
    }
  }

  @media (max-width: 700px) {
    .ham {
      display: flex;
      margin-left: auto;
    }
  }
`;
