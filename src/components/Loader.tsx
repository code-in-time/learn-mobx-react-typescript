import React, { Component, ReactHTMLElement, ReactComponentElement } from 'react';
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'
import NotesStore, { Inotes } from "../store/NotesStore"

@observer
export default class Loader extends Component {
    render() {
        if (NotesStore.saveNotesIsLoading) {
            return (
                <div>loading</div>
            )
        }
        return null
    }
} 
