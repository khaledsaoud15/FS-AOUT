import "./style.css";
import styled from "styled-components";

const Index = (props) => {
  return (
    <>
      <Container>
        <Name>Hello from card component</Name>
        <Name>{props.mesage}</Name>
        <div>
          {props.list.map((c) => {
            return (
              <CardsContainer className="card">
                <h1 className="header">{c.username}</h1>
                <h1>{c.email}</h1>
                <div>
                  {c.data.map((d) => {
                    return <p>{d}</p>;
                  })}
                </div>
              </CardsContainer>
            );
          })}
        </div>
      </Container>
      <img src="./images/ellie.jpg" alt="" />
    </>
  );
};

export default Index;

// ---------------------------STYLES -------------------------
const Name = styled.h1`
  color: #000;
`;
const Container = styled.div``;
const CardsContainer = styled.div`
  .header {
    color: red;
  }
`;
