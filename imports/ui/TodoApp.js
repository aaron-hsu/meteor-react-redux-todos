import React, { Component } from 'react';

import { compose } from 'redux';
import { connect } from "react-redux";
import { withTracker } from 'meteor/react-meteor-data';
import { bindActionCreators } from "redux";

import TodoList from "/imports/ui/components/TodoList";
import AddTodo from "/imports/ui/components/AddTodo";

import { Todos } from '/imports/api/todos';
import { setTodos } from '/imports/redux/actions/todos'



class TodoApp extends Component {
  render() {

    console.log('render this.props',this.props);

    return (
      <div>
        TodoApp
        <AddTodo/>
        <TodoList/>
      </div>
    );
  }
}

// export default TodoApp;

const mapStateToProps = (state /*, ownProps*/) => {
  return {

  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setTodos
  }, dispatch)
}


export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withTracker((props) => {

    Meteor.subscribe('todos');

    props.setTodos( {todos : Todos.find().fetch()});

    return {
      currentUser: Meteor.user(),
    };
  })
)(TodoApp);
