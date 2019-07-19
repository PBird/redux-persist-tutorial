let nextTodoId = 0;
const addTodo = () => ({
  type: 'ADD_TODO',
  payload: {
    id: nextTodoId++,
  },
});
const setText = text => ({
  type: 'SET_TEXT',
  payload: {
    text,
  },
});

export { addTodo, setText };
