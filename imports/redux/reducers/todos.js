import {SET_TODOS} from "/imports/redux/actions/todos";

const initState           = [];
export const todosReducer = (todos = initState, action) => {

  console.log('action',action.type);


  switch (action.type) {

    case SET_TODOS:
      return action.payload;

    default:
      return todos;
  }
};