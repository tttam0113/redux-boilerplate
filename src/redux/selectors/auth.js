import { createSelector } from 'reselect';

export const getAuth = state => state.auth;

export const getUser = createSelector(
  getAuth,
  auth => auth.user,
);

export const getAuthenticated = createSelector(
  getAuth,
  getUser,
  (auth, user) => auth && user,
);
