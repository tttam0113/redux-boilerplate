// action type for both
export const SET_LOADER = 'SET_LOADER';

// action creators for both
export const setLoader = ({ state, feature }) => ({
  type: `${feature} ${SET_LOADER}`,
  payload: state,
  meta: { feature },
});

export const SET_POSTS_LOADING = 'SET_POSTS_LOADING';
export const SET_POST_DETAIL_LOADING = 'SET_POST_DETAIL_LOADING';
export const SET_POST_DETAIL_DELETING = 'SET_POST_DETAIL_DELETING';
export const SET_POST_DETAIL_UPDATING = 'SET_POST_DETAIL_UPDATING';
export const SET_POST_FORM_SUBMITTING = 'SET_POST_SUBMITING';

export const setPostsLoading = ({ state }) => ({
  type: SET_POSTS_LOADING,
  payload: state,
  meta: {},
});

export const setPostDetailLoading = ({ state }) => ({
  type: SET_POST_DETAIL_LOADING,
  payload: { loading: state },
  meta: {},
});

export const setPostDetailDeleting = ({ state }) => ({
  type: SET_POST_DETAIL_DELETING,
  payload: { deleting: state },
  meta: {},
});

export const setPostDetailUpdating = ({ state }) => ({
  type: SET_POST_DETAIL_UPDATING,
  payload: { updating: state },
  meta: {},
});

export const setPostFormSubmitting = ({ state }) => ({
  type: SET_POST_FORM_SUBMITTING,
  payload: state,
  meta: {},
});
