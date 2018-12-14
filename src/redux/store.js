import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import uiReducer from './reducers/ui';
import authReducer from './reducers/auth';
import actionSplitterMiddleware from './middlewares/core/actionSplitter';
import firebaseApiMiddleware from './middlewares/core/firebaseApi';
import loggerMiddleware from './middlewares/core/logger';
import authMiddleware from './middlewares/feature/auth';

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});

const featureMiddlewares = [authMiddleware];
const coreMiddlewares = [
  actionSplitterMiddleware,
  firebaseApiMiddleware,
  loggerMiddleware,
];

const composeEnhancers = compose;

const enhancer = composeEnhancers(applyMiddleware(...featureMiddlewares, ...coreMiddlewares));

export default createStore(rootReducer, {}, enhancer);
