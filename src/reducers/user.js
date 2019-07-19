const initialState = {
  name: 'initial',
  additional: '',
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export default todos;
