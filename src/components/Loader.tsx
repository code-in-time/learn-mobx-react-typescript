import React, { Component, ReactHTMLElement, ReactComponentElement } from 'react';
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'
import { Store } from "../store/Store"
import { Inotes } from "../store/NotesStore"

@observer
export default class Loader extends Component {
    render() {
        if (Store.NotesStore.saveNotesIsLoading ||
            Store.NotesStore.loadNotesIsLoading) {
            return (
                <div>loading</div>
            )
        }
        return null
    }
} 
