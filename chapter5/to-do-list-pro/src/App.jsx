import styled from "styled-components";
import deleteIcon from "./delete.png";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [obj, setObj] = useState();
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const dateChange = (e) => {
    setDate(e.target.value);
  };

  const addToDO = () => {
    setTodos([
      ...todos,
      {
        ...obj,
        id: Math.random().toString(36).substring(2, 8),
        todo: input,
        date: date,
      },
    ]);

    setInput("");
    setDate("");
  };

  const deleteTodo = (id) => {
    const TODO_ID = todos.find((t) => t.id === id);
    todos.splice(todos.indexOf(TODO_ID), 1);
    setTodos([...todos]);
  };

  const updateTodoId = (id) => {
    const TODO_ID = todos.find((t) => t.id === id);

    setObj({ id: TODO_ID.id, todo: input, date });
    todos.splice(todos.indexOf(TODO_ID), 1, { ...obj });
    setTodos([...todos]);
  };

  console.log(obj);
  console.log(todos);
  return (
    <Container>
      <h1>My Todo-S</h1>
      <div className="input-field">
        <input
          type="text"
          placeholder="Add TODO"
          onChange={inputChange}
          value={input}
        />
        <input type="date" onChange={dateChange} value={date} />
        <button onClick={addToDO}>Add</button>
      </div>
      <div className="data">
        {todos.map((t, k) => {
          return (
            <div className="single-todo" key={k}>
              <h2>{t.todo}</h2>
              <div className="date-and-delete">
                <img
                  src={deleteIcon}
                  alt=""
                  onClick={() => {
                    deleteTodo(t.id);
                  }}
                />
                <img
                  src={deleteIcon}
                  alt=""
                  style={{ backgroundColor: "green" }}
                  onClick={() => {
                    updateTodoId(t.id);
                  }}
                />
                <p>{t.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default App;

// STYLES

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 30%;
  height: 80vh;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  h1 {
    text-align: center;
    font-size: 4rem;
    font-weight: 400;
  }
  .input-field {
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    justify-content: space-between;
    input[type="date"] {
      margin-left: auto;
    }
    input {
      border: none;
      outline: none;
    }
    button {
      padding: 10px 20px;
      border: none;
      background-color: #2443bf;
      color: #fff;
      border-radius: 4px;
      margin-left: 10px;
      cursor: pointer;
    }
  }

  .data {
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 50vh;
    padding: 0 20px;
    width: 100%;
    .single-todo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 4px;
      h2 {
        font-size: 18px;
      }
      padding: 8px;

      .date-and-delete {
        display: flex;
        flex-direction: column;
        gap: 3px;
        height: 100%;
        img {
          width: 15px;
          marker: auto;
        }
      }
    }
  }
`;
