import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    removeTodo: (state, action) => {
      let index = state.todo.findIndex((t) => t.id === action.payload);
      state.todo.splice(index, 1);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
