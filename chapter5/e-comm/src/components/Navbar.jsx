import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Left>
        <img src={logo} alt="" />
        <div className="links">
          <a href="">Collections</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </Left>
      <Right>
        <div className="cart">
          <img src={cart} alt="" />
          <p>0</p>
        </div>
        <img src={avatar} alt="" className="avatar" />
      </Right>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  justify-content: space-between;
  padding: 0 80px;
  border-bottom: 2px solid #ccc;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  .links {
    display: flex;
    align-items: center;
    gap: 30px;
    a {
      text-decoration: none;
      color: #000;
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  .avatar {
    width: 50px;
    height: 50px;
  }

  .cart {
    position: relative;
    p {
      position: absolute;
      top: -120%;
      right: -60%;
    }
  }
`;
