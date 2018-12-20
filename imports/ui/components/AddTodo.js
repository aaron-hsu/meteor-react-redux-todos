import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {createTodo} from "/imports/redux/actions/todos";



class AddTodo extends Component {

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    console.log('start call todos.insert');

    this.props.createTodo({text});

    // const result  = Meteor.call('todos.insert',text,(err,result) => {
    //   console.log('callback result',result);
    // });
    // console.log('result',result);
    // console.log('end call todos.insert');

    // Tasks.insert({
    //   text,
    //   createdAt : new Date(), // current time
    // });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  
  
  render() {
    return (
      <div>
        <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
          <input
            type="text"
            ref="textInput"
            placeholder="Type to add new tasks"
          />
        </form>
      </div>
    );
  }
}

// export default AddTodo;

const mapStateToProps = (state /*, ownProps*/) => {
  return {

  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createTodo
  }, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);