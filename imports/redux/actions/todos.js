// feature name
export const TODOS = '[Todos]';

// action types
export const FETCH_TODOS = `${TODOS} FETCH`;
export const SET_TODOS   = `${TODOS} SET`;

export const CREATE_TODO   = `${TODOS} CREATE`;
export const REMOVE_TODO   = `${TODOS} REMOVE`;
export const CHECK_TODO   = `${TODOS} CHECK`;

// action creators
export const fetchTodos = ({query}) => ({
  type: FETCH_TODOS,
  payload: query
});

export const setTodos = ({todos}) => ({
  type: SET_TODOS,
  payload: todos
});

export const createTodo = ({text}) => ({
  type: CREATE_TODO,
  payload: {
    text:text
  }
});

export const removeTodo = ({todoId}) => ({
  type: REMOVE_TODO,
  payload: {
    todoId:todoId
  }
});

export const checkTodo = ({todoId,setChecked}) => ({
  type: CHECK_TODO,
  payload: {
    todoId:todoId,
    setChecked:setChecked
  }
});