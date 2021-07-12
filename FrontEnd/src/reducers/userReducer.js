import loginService from '../services/login';

export const loginUser = (credentials) => {
  return async (dispatch) => {
    const data = await loginService.login(credentials);
    dispatch({ type: 'LOGIN', data });
  };
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN': {
      const userDetails = action.data;
      return { ...state, userDetails };
    }
    default:
      return state;
  }
};

export default userReducer;
