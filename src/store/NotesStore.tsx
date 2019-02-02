import { observable, computed, action } from 'mobx'
import { observer} from 'mobx-react'

export interface Inotes {
    msg: string,
    ID: number,
    date: string,
}

class NotesClass {
    @observable notes: Array<Inotes> = [];
    @action.bound
    addNote(note: Inotes) {
        this.notes.push(note);
    }
    
    // @action.bound
    // increment() {
    //     this.counter++
    // }
    // @action.bound
    // decriment() {
    //     this.counter === 0 ? null : this.counter--
    // }
}

// class TodoList {
//     @observable todos = [];
//     @computed get unfinishedTodoCount() {
//         return this.todos.filter(todo => !todo.finished).length;
//     }
// }

const NotesStore = new NotesClass();

export default NotesStore
