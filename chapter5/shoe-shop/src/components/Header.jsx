import styled from "styled-components";
import nb from "../images/nb.png";

const Header = () => {
  return (
    <Container>
      <Left>
        <p>This week's discount</p>
        <h1>New Balance 530</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          reiciendis aut, quod odio, dolores omnis distinctio laboriosam
          sapiente vero molestiae facilis. Voluptatem iusto laudantium corrupti.
          Reiciendis deserunt, dolore quos quidem velit voluptatum ratione
          impedit excepturi, quo enim officia, laudantium inventore!
        </p>
        <button>Buy Now</button>
      </Left>

      <Right>
        <img src={nb} alt="" />
      </Right>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  height: 80vh;
  justify-content: center;
  background-color: #ededed;
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  p {
    width: 80%;
    line-height: 25px;
  }
  button {
    width: 30%;
    padding: 15px;
    border: none;
    background-color: #3071c6;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
`;
const Right = styled.div`
  img {
    filter: drop-shadow(10px 20px rgba(0, 0, 0, 0.3));
  }
`;
