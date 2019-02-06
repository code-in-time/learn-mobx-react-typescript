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


type Props = {

}




@observer
class Wall extends Component {
  render() {
    return (
      <div className="Wall p-2" >
        Wall component
      </div>
    );
  }
}

export default Wall;
