import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./redux/todoSlice";

const App = () => {
  const todo = useSelector((props) => props.todo.todo);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const addTodoItem = () => {
    dispatch(
      addTodo({
        id: Math.random().toString(36).slice(2, 8),
        todo: input,
      })
    );
    setInput("");
  };

  const deleteTodoLits = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodoItem}>add</button>
      <div className="todos">
        {todo.map((t) => {
          return (
            <>
              <h1>{t.todo}</h1>
              <button onClick={() => deleteTodoLits(t.id)}>Delete</button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default App;
