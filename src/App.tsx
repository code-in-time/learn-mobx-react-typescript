import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observable, computed } from 'mobx'
import { observer} from 'mobx-react'
import TodoListView from "./TodoListView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListView />
      </div>
    );
  }
}

export default App;
