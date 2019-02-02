import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observable, computed } from 'mobx'
import { observer} from 'mobx-react'
import TodoListView from "./TodoListView";
import 'bootstrap/dist/css/bootstrap.min.css'
import NotesAdd from './NotesAdd';
import NotesView from './NotesView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col">
            <TodoListView />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <NotesAdd />
          </div>
          <div className="col">
            <NotesView />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
