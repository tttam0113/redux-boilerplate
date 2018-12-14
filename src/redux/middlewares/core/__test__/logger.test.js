import mockMiddleware from 'tests/__mocks__/mockMiddleware';
import loggerMiddleware from '../logger';

const create = mockMiddleware(loggerMiddleware);
let getState;
let next;
let invoke;

describe('loggerMiddleware', () => {
  beforeEach(() => {
    const res = create();
    getState = res.store.getState;
    next = res.next;
    invoke = res.invoke;

    process.env.NODE_ENV = 'development';
  });

  it('should pass through any action object', () => {
    const action = { type: 'TEST' };

    invoke(action);

    expect(next).toHaveBeenCalledWith(action);
  });

  it('should get previous and next state', () => {
    const action = { type: 'TEST' };

    invoke(action);

    expect(getState).toHaveBeenCalledTimes(2);
  });

  it('should not get previous and next state in production mode', () => {
    process.env.NODE_ENV = 'production';

    const action = { type: 'TEST' };

    invoke(action);

    expect(next).toHaveBeenCalled();
    expect(getState).toHaveBeenCalledTimes(0);
  });
});
