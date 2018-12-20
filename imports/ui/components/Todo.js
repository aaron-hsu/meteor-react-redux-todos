import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

import {removeTodo, checkTodo} from "/imports/redux/actions/todos";



class Todo extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value


    // Meteor.call('todos.setChecked',this.props.todo._id,!this.props.todo.checked,(err,result) => {
    //   console.log('result',result);
    // });

    this.props.checkTodo({todoId:this.props.todo._id,setChecked:!this.props.todo.checked});

  }

  deleteThisTask() {

    // Meteor.call('todos.remove',this.props.todo._id,(err,result) => {
    //   console.log('result',result);
    // })

    this.props.removeTodo({todoId:this.props.todo._id});

  }


  render() {
    return (
      <li>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>

        <input
          type="checkbox"
          readOnly
          checked={!!this.props.todo.checked}
          onClick={this.toggleChecked.bind(this)}
        />
        {this.props.todo.text}
        </li>
    );
  }
}

// export default Todo;


const mapStateToProps = (state /*, ownProps*/) => {
  return {

  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    removeTodo,
    checkTodo
  }, dispatch)
}


// export default TodoApp;

export default connect(mapStateToProps,mapDispatchToProps)(Todo);