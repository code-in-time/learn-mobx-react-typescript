import React, { Component, ReactHTMLElement, ReactComponentElement } from 'react';
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'
import { Store } from "../store/Store"
import { Inotes } from "../store/NotesStore"
// import { trace } from "mobx"


@observer
export default class NotesView extends Component {

    xButton = (index:number) => <button onClick={() => {Store.NotesStore.removeNote(index)}} type="button">X</button>

    btnClickApiSave = (e:any) => {
        // TODO: What should any be?
        console.log('e', e)
        Store.NotesStore.saveNotes();

    }

    render() {
        return (
            <div>
                {/* {trace(true)} */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>date</th>
                            <th>ID</th>
                            <th>msg</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Store.NotesStore.notes.length === 0 && <tr><td></td>NO NOTES<td></td><td></td></tr>}
                        {Store.NotesStore.notes.length >= 1 &&
                            Store.NotesStore.notes.map((v, i) => 
                                <tr key={i}>
                                    <td>{v.date}</td>
                                    <td>{v.ID}</td>
                                    <td>{v.msg}</td>
                                    <td>{this.xButton(i)}</td>
                                </tr>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>
                                <strong>Total Notes: {Store.NotesStore.totalNewNotesCount}</strong>
                                {/* API to save all notes */}
                                {Store.NotesStore.notes.length >= 1 &&
                                    <button type="button" onClick={this.btnClickApiSave}>API Save notes</button>
                                }
                            </td>
                        </tr>
                    </tfoot>

                </table>
            </div>
        )
    }
}