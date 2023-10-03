import styled from "styled-components";
import Index from "./Card";

const App = () => {
  const list = [
    {
      username: "khaled",
      email: "khaledsaoud@gmail.com",
      data: ["dev", "des"],
    },
    {
      username: "jaz",
      email: "jaz@gmail.com",
      data: ["tra", "all"],
    },
  ];

  return (
    <>
      <Name className="header">Hello From React</Name>
      <Index mesage="hello" list={list} />
    </>
  );
};

export default App;

const Name = styled.h1`
  color: green;
`;
