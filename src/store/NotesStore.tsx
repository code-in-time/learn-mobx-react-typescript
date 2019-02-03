import { observable, computed, action } from 'mobx'
import { observer} from 'mobx-react'
import axios from 'axios'

export interface Inotes {
    msg: string,
    ID: number,
    date: string,
}

class NotesClass {
    @observable notes: Array<Inotes> = [];
    @observable saveNotesIsLoading: boolean = false;
    @action.bound
    addNote(note: Inotes) {
        this.notes.push(note);
    }
    @action.bound
    removeNote(index: number) {
        this.notes.splice(index, 1);
    }
    @action.bound
    clearAllNotes() {
        this.notes = [];
    }
    @action.bound
    saveNotes(){

        this.saveNotesIsLoading = true
        axios.post('http://localhost:5000/api/shop', {NotesL: this.notes})
        .then((response: any) => {
          console.log(response);
          this.saveNotesIsLoading = false
          // clear all the notes
          NotesStore.clearAllNotes()
        })
        .catch((error) => {
          console.log(error);
          this.saveNotesIsLoading = false
        });
    }
    @computed
        get totalNewNotesCount() {
            return this.notes.length;
        }
    }
    
// class TodoList {
//     @observable todos = [];
//     @computed get unfinishedTodoCount() {
//         return this.todos.filter(todo => !todo.finished).length;
//     }
// }

const NotesStore = new NotesClass();

export default NotesStore
