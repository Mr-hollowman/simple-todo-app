import {createSlice} from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [],
    userInfo:'',
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
    addUserInfo:(state, action) => {
      // let {todo} = state;
      state.userInfo = action.payload
    }
  },
});

export const {addTodo, deleteTodo, editTodo, addUserInfo} = TodoSlice.actions;

export default TodoSlice.reducer;
