import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Todo from "/imports/ui/components/Todo";

class TodoList extends Component {

  renderTodoList() {
    return this.props.todos.map((todo) => {
      return (
        <Todo key={todo._id} todo={todo} />
      )
    })
  }

  render() {
    return (
      <div>
        TodoList
        {this.renderTodoList()}
      </div>
    );
  }
}

// export default TodoList;


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    todos: state.todos
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);