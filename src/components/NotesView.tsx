import React, { Component, ReactHTMLElement, ReactComponentElement } from 'react';
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'
import NotesStore, { Inotes } from "../store/NotesStore"


@observer
export default class NotesView extends Component {

    xButton = (index:number) => <button onClick={() => {NotesStore.removeNote(index)}} type="button">X</button>

    btnClickApiSave = (e:any) => {
        console.log('e', e)
        NotesStore.saveNotes();

    }

    render() {
        return (
            <div>
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
                        {NotesStore.notes.length === 0 && <tr><td></td>NO NOTES<td></td><td></td></tr>}
                        {NotesStore.notes.length >= 1 &&
                            NotesStore.notes.map((v, i) => 
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
                                <strong>Total Notes: {NotesStore.totalNewNotesCount}</strong>
                                {/* API to save all notes */}
                                {NotesStore.notes.length >= 1 &&
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