const initialState = {
  posts: { loading: false },
  postDetail: { loading: false, deleting: false, updating: false },
  postForm: { submitting: false },
};

export default (ui = initialState, action) => {
  switch (action.type) {
    default:
      return ui;
  }
};
