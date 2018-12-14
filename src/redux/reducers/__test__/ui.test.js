import uiReducer from '../ui';

it('should set default state', () => {
    const state = uiReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        posts: { loading: false },
        postDetail: { loading: false, deleting: false, updating: false },
        postForm: { submitting: false },
    });
});

// it('should change loading state', () => {
//     const state = uiReducer(
//         { loading: false },
//         { type: '[Feature] SET_LOADER', payload: true }
//     );
//     expect(state.loading).toBe(true);
// });
