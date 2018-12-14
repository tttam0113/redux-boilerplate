import authReducer from '../auth';
import { SET_USER } from 'redux/actions/auth';

it('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    user: undefined,
  });
});

it('should update user', () => {
  const state = authReducer({ user: {} }, { type: SET_USER, payload: { name: 'user name' } });

  expect(state).toEqual({
    user: { name: 'user name' },
  });
});
