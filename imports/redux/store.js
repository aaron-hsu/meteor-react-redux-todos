import {applyMiddleware, combineReducers, compose, createStore} from 'redux';

import {apiMiddleware} from '/imports/redux/middleware/core/api';
import {loggerMiddleware} from "/imports/redux/middleware/core/logger";
import {notificationMiddleware} from "/imports/redux/middleware/core/notification";

import {todosMiddleware} from '/imports/redux/middleware/feature/todos';

import {notificationsReducer} from "/imports/redux/reducers/notification";
import {todosReducer} from '/imports/redux/reducers/todos.js';
import {uiReducer} from "/imports/redux/reducers/ui";



// shape the state structure
const rootReducer = combineReducers({
  todos: todosReducer,
  ui: uiReducer,
  notification: notificationsReducer
});

// create the feature middleware array
const featureMiddleware = [
  todosMiddleware
];

// create the core middleware array
const coreMiddleware = [
  // apiMiddleware,
  notificationMiddleware,
  loggerMiddleware
];

// compose the middleware with additional (optional) enhancers,
// DevTools.instrument() will enable dev tools integration
const enhancer = compose(
  applyMiddleware(...featureMiddleware, ...coreMiddleware)
);

// create and configure the store
export const store = createStore(rootReducer, {}, enhancer);