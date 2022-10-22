import {createSlice} from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.todo.length + 1,
        task: action.payload,
      };
      state.todo.push(newTodo);
    },
    deleteTodo: (state, action) => {
      let {todo} = state;
      state.todo = todo.filter(item => {
        return item.id !== action.payload;
      });
    },
    editTodo: (state, action) => {
      let {todo} = state;
      state.todo = todo.map(item => {
        return item.id == action.payload.id ? action.payload : item;
      });
    },
  },
});

export const {addTodo, deleteTodo, editTodo} = TodoSlice.actions;

export default TodoSlice.reducer;
