import authMiddleware from '../auth';
import mockMiddleware from 'tests/__mocks__/mockMiddleware';

const create = mockMiddleware(authMiddleware);
let next;
let invoke;

beforeEach(() => {
  const res = create();
  next = res.next;
  invoke = res.invoke;
});

it('Should pass through any action', () => {
  const action = { type: 'TEST' };

  invoke(action);

  expect(next).toHaveBeenCalledWith(action);
});
