export const LOGIN = 'LOGIN'; // command action
export const LOGOUT = 'LOGOUT'; // command action
export const FETCH_USER = 'FETCH_USER';
export const SET_USER = 'SET_USER';

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setUser = ({ user }) => ({
  type: SET_USER,
  payload: user,
  meta: {},
});

export const fetchUser = () => ({
  type: FETCH_USER,
  payload: null,
  meta: {},
});
