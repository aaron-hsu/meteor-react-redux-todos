import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Todos = new Mongo.Collection('todos');

if(Meteor.isServer) {
  Meteor.publish('todos',() => {
    return Todos.find();
  })
}

Meteor.methods({
  'todos.insert'(text) {

    console.log('=======================');
    console.log('todos.insert called',text);


    check(text, String);

    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }


    const result  = Todos.insert({
      text,
      createdAt: new Date(),
      checked:false
      // owner: this.userId,
      // username: Meteor.users.findOne(this.userId).username,
    });

    // console.log('result',result);
    return result;
  },
  'todos.remove'(todoId) {

    console.log('=======================');
    console.log('todos.remove called',todoId);



    check(todoId, String);

    return Todos.remove(todoId);
  },
  'todos.setChecked'(todoId, setChecked) {

    console.log('=======================');
    console.log('todos.setChecked called',todoId,setChecked);



    check(todoId, String);
    check(setChecked, Boolean);

    return Todos.update(todoId, { $set: { checked: setChecked } });
  },
});
