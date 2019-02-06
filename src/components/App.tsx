import React, { Component } from 'react';
import logo from './logo.svg';
import { observable, computed } from 'mobx'
import { observer} from 'mobx-react'
import TodoListView from "./TodoListView";
import 'bootstrap/dist/css/bootstrap.min.css'
import NotesAdd from './NotesAdd';
import NotesView from './NotesView';
import DevTools from 'mobx-react-devtools'
import Loader from './Loader';
import { Store, Istore } from "../store/Store"
import { Inotes } from "../store/NotesStore"
import makeInspectable from 'mobx-devtools-mst';
import Box from './Box';


  makeInspectable(Store)

type Props = {

}




@observer
class App extends Component {
  /**
   * This is where all items in the store would initialize if required
   */
  componentDidMount() {
    // Load the notes
    Store.NotesStore.loadNotes();
  }

  render() {
    return (
      <div className="App" >
        <Loader />
        {/* <DevTools /> */}

        <Box/>

        <div className="row">
          <div className="col">
            <TodoListView expiry={5} />
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
      
        <div className="row">
            <div className="col">
              <div>Counter: {Store.CounterStore.counter}</div>
            </div>
          </div>

      </div>
    );
  }
}

export default App;
