import mockMiddleware from 'tests/__mocks__/mockMiddleware';
import actionSplitterMiddleware from '../actionSplitter';

const create = mockMiddleware(actionSplitterMiddleware);
let next;
let invoke;

beforeEach(() => {
  const res = create();
  next = res.next;
  invoke = res.invoke;
});

describe('actionSplitterMiddleware', () => {
  it('should pass through any action object', () => {
    const action = { type: 'TEST' };

    invoke(action);

    expect(next).toHaveBeenCalledWith(action);
  });

  it('should pass through list actions', () => {
    const actions = [{ type: 'TEST 1' }, { type: 'TEST 2' }, { type: 'TEST 3' }];

    invoke(actions);

    expect(next).toHaveBeenCalledTimes(actions.length);

    actions.forEach(action => {
      expect(next).toHaveBeenCalledWith(action);
    });
  });
});
