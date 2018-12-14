import { FETCH_USER, LOGIN, LOGOUT, setUser } from 'redux/actions/auth';
// import { firebase, googleAuthProvider } from '../../../firebase/firebase';

export default () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_USER:
      // firebase.auth().onAuthStateChanged(user => {
      next(setUser({ user: { id: 'user-id', displayName: 'user display name' } }));
      // });
      break;
    case LOGIN:
      // firebase.auth().signInWithPopup(googleAuthProvider);
      break;
    case LOGOUT:
      // firebase.auth().signOut();
      break;
    default:
      break;
  }
};
