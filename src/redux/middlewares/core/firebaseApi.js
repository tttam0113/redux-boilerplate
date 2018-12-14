import database from '../../../firebase/firebase';
import * as Methods from '../../../firebase/methods';
import {
  FIREBASE_API_REQUEST,
  firebaseApiSuccess,
  firebaseApiFailure,
} from '../../actions/firebaseApi';

export default ({ dispatch }) => next => action => {
  next(action);

  if (action.type.includes(FIREBASE_API_REQUEST)) {
    const { ref: db, data } = action.payload;
    const {
      method,
      feature,
      resolve: actionResolve = () => {},
      reject: actionReject = () => {},
    } = action.meta;
    const dbRef = database.ref(db);
    const successCallback = snapshot => {
      dispatch(
        firebaseApiSuccess({
          response: snapshot,
          data: { method },
          feature,
        }),
      );
      actionResolve();
    };

    const errorCallback = error => {
      dispatch(
        firebaseApiFailure({
          error,
          data: { ref: db, method, data },
          feature,
        }),
      );
      actionReject();
    };

    switch (method) {
      case Methods.ONCE_VALUE:
        dbRef
          .once('value')
          .then(successCallback)
          .catch(errorCallback);
        break;
      case Methods.PUSH:
        dbRef
          .push(data)
          .then(successCallback)
          .catch(errorCallback);
        break;
      case Methods.SET:
        dbRef
          .set(data)
          .then(successCallback)
          .catch(errorCallback);
        break;
      case Methods.UPDATE:
        dbRef
          .update(data)
          .then(successCallback)
          .catch(errorCallback);
        break;
      case Methods.ON_VALUE:
        dbRef.on('value', successCallback);
        break;
      case Methods.ON_CHILD_ADDED:
        dbRef.on('child_added', successCallback);
        break;
      case Methods.ON_CHILD_CHANGED:
        dbRef.on('child_changed', successCallback);
        break;
      case Methods.ON_CHILD_REMOVED:
        dbRef.on('child_removed', successCallback);
        break;
      case Methods.ON_CHILD_MOVED:
        dbRef.on('child_moved', successCallback);
        break;
      default:
        break;
    }
  }
};
