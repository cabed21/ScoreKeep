import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup( function () {
  Players.insert({
    name: 'Dio',
    score: 7
  });
  console.log(Players.find().fetch());
});
