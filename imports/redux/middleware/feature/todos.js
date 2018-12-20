

import {CREATE_TODO,REMOVE_TODO,CHECK_TODO} from "/imports/redux/actions/todos";



export const todosMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case CREATE_TODO:
      Meteor.call('todos.insert',action.payload.text);
      break;

    case REMOVE_TODO:
      Meteor.call('todos.remove', action.payload.todoId );
      break;

    case CHECK_TODO:
      Meteor.call('todos.setChecked',action.payload.todoId,action.payload.setChecked);
      break;



    //
    // case FETCH_TODOS:
    //   next(apiRequest({body: null, method: 'GET', url: TODOS_URL, feature: TODOS}));
    //   next(setLoader({state: true, feature: TODOS}));
    //
    //   break;
    // case `${TODOS} ${API_SUCCESS}`:
    //   next(setTodos({todos: action.payload.items, normalizeKey: 'id'}));
    //   next(setLoader({state: false, feature: TODOS}));
    //   break;
    //
    // case `${TODOS} ${API_ERROR}`:
    //   next(setNotification({message: action.payload.message, feature: TODOS}));
    //   next(setLoader({state: false, feature: TODOS}));
    //   break;
  }
};