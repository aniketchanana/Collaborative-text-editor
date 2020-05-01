import React from 'react';
import './App.css';
import DisplayUsers from './components/DisplayUsers';
import {subscribetoserver} from './subscribetoserver';
import DisplayEditor from './components/DisplayEditor';

function App() {
  let username = '';
  while(username === '') {
    username = window.prompt('please enter your name');
  } 
  subscribetoserver(username);
  return (
    <div className="App">
      <div className="editorArea">
        <DisplayEditor/>
      </div>
      <div className="displayUsersArea">
        <DisplayUsers/>
      </div>
    </div>
  );
}

export default App;
