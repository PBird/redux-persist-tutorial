const initialState = {
  todoText: '',
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            text: state.todoText,
          },
        ],
      };
    case 'SET_TEXT':
      return {
        ...state,
        todoText: action.payload.text,
      };
    default:
      return state;
  }
};

export default todos;
