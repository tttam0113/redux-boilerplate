import mockMiddleware from 'tests/__mocks__/mockMiddleware';
import firebaseApiMiddleware from '../firebaseApi';
// import * as Methods from 'firebase/methods';

// import wait from 'tests/__mocks__/wait';

const create = mockMiddleware(firebaseApiMiddleware);

let next;
let invoke;
beforeEach(() => {
  const res = create();
  // dispatch = res.store.dispatch;
  next = res.next;
  invoke = res.invoke;
});

it('should pass through any action', () => {
  const action = { type: 'TEST' };

  invoke(action);

  expect(next).toHaveBeenCalledWith(action);
});

// it('should push data to firebase database', (done) => {
//     const action = {
//         type: '[Test] FIREBASE_API_REQUEST',
//         payload: {
//             ref: 'posts',
//             data: {
//                 title:
//                     'Testing React Components with Jest and Enzyme - In Depth',
//                 content,
//                 createdAt: new Date(),
//                 author: 'Alona Pysarenko'
//             }
//         },
//         meta: {
//             method: Methods.PUSH,
//             feature: '[Test]'
//         }
//     };

//     invoke(action);

//     wait(() => {
//         expect(dispatch).toBeCalled();
//         done();
//     }, 2000);
// });
