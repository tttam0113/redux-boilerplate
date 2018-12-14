const initialState = {
  title: '',
  content: '',
  actions: [],
};

export default (notification = initialState, action) => {
  switch (action.type) {
    default:
      return notification;
  }
};
