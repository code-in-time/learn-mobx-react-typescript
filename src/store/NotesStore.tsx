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
    // Loading flags
    @observable saveNotesIsLoading: boolean = false;
    @observable loadNotesIsLoading: boolean = false;

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
          // Clear all the notes
          NotesStore.clearAllNotes()
        })
        .catch((error) => {
          console.log(error);
          this.saveNotesIsLoading = false
        });
    }

    @action.bound
    loadNotes(){
        this.loadNotesIsLoading = true
        axios.get('http://localhost:5000/api/shop')
        .then((response: any) => {
          console.log(response);
          this.loadNotesIsLoading = false
          // clear all the notes
          NotesStore.clearAllNotes()
        })
        .catch((error) => {
          console.log(error);
          this.loadNotesIsLoading = false
        });
    }

    @computed
        get totalNewNotesCount() {
            return this.notes.length;
        }
    }
    
const NotesStore = new NotesClass();

export default NotesStore
