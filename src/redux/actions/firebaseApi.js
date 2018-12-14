export const FIREBASE_API_REQUEST = 'FIREBASE_API_REQUEST';
export const FIREBASE_API_SUCCESS = 'FIREBASE_API_SUCCESS';
export const FIREBASE_API_FAILURE = 'FIREBASE_API_FAILURE';

export const firebaseApiRequest = ({ ref, method, data = {}, feature }) => ({
  type: `${feature} ${FIREBASE_API_REQUEST}`,
  payload: { ref, data },
  meta: {
    method,
    feature,
  },
});

export const firebaseApiSuccess = ({ response, data, feature }) => ({
  type: `${feature} ${FIREBASE_API_SUCCESS}`,
  payload: response,
  meta: {
    data,
    feature,
  },
});

export const firebaseApiFailure = ({ error, data, feature }) => ({
  type: `${feature} ${FIREBASE_API_FAILURE}`,
  payload: error,
  meta: {
    data,
    feature,
  },
});
