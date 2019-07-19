const setUser = name => ({
  type: 'SET_USER',
  payload: {
    name,
  },
});

export default setUser;
