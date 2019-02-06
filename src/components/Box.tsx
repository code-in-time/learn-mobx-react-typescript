import React, { Component } from 'react';
import logo from './logo.svg';
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'
import TodoListView from "./TodoListView";
import 'bootstrap/dist/css/bootstrap.min.css'
import NotesAdd from './NotesAdd';
import NotesView from './NotesView';
import DevTools from 'mobx-react-devtools'
import Loader from './Loader';
import { Store, Istore } from "../store/Store"
import { Inotes } from "../store/NotesStore"
import makeInspectable from 'mobx-devtools-mst';
import Wall from './Wall';
import { inject } from 'mobx-react';

type Props = {

}



@inject("Store")
@observer
class Box extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        console.log('props', this.props)
        return (
            <div className="Box p-3" >
                box component
        <Wall />
            </div>
        );
    }
}

export default Box;
