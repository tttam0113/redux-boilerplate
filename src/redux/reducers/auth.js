import { SET_USER } from '../actions/auth';

const initialState = {
  user: undefined,
};

export default (auth = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...auth,
        user: action.payload,
      };
    default:
      return auth;
  }
};
