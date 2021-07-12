export const loginUser = (credentials) => {
  console.log(credentials);
  return async (dispatch) => {
    dispatch({ type: 'LOGIN' });
  };
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN': {
      console.log('test');
      return 0;
    }
    default:
      return state;
  }
};

export default userReducer;
