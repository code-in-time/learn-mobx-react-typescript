import React, { Component } from 'react';
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'
import  NotesStore, { Inotes } from "../store/NotesStore"

@observer
export default class NotesAdd extends Component {
    submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // _values : Inotes
        console.log('form', this.state)
        NotesStore.addNote(this.state);
        // Get the state
        //debugger;

        // Reset state
        this.setState({
            ID: '',
            msg: '',
            date: ''
        })


    }

    state: Inotes = {
        msg: Math.random().toString(),
        date: `${new Date().getHours()} - ${new Date().getMinutes()} - ${new Date().getSeconds()}`,
        ID: 0,
    }

    render() {
        return (
            <div className="NotesAdd">
                <form name="noteForm" onSubmit={(e) => this.submitForm(e)}>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >ID</span>
                    </div>
                    <input type="text" className="form-control" name="ID" value={this.state.ID} onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ID: e.currentTarget.value})} />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">msg</span>
                    </div>
                    <input type="text" className="form-control" name="msg" value={this.state.msg} onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({msg: e.currentTarget.value})} />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">note</span>
                    </div>
                    <input type="text" className="form-control" name="date" value={this.state.date} onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({date: e.currentTarget.value})} />
                </div>
                <button type="submit" disabled={this.state.date==='' || this.state.msg===''}>Add note</button>
                </form>
            </div>
        )
    }
}