import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
  _id: '1',
  name: 'Christy',
  score: 99
}, {
  _id: '2',
  name: 'Chris',
  score: -1
}, {
  _id: '3',
  name: 'Leah',
  score: 4
}];

const renderPlayers = function (playersList) {
  return playersList.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s)</p>;
  });
};

Meteor.startup(function () {
  let title = 'Score Keep'
  let name = 'Chris';
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      <h2>Leaderboard.</h2>
      {renderPlayers(players)}
  </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});
