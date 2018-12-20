import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from "react-redux";

import TodoApp from '/imports/ui/TodoApp'
import { store } from '/imports/redux/store';

Meteor.startup(() => {
  ReactDOM.render(
    <Provider store={store}>
      <TodoApp/>
    </Provider>,
    document.getElementById('root')
  )
})