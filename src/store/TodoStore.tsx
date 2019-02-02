import { observable, computed, action } from 'mobx'
import { observer} from 'mobx-react'

class TodoStoreClass {
    @observable title: string;
    @observable finished: boolean = false;
    @observable counter: number = 0;
    id = Math.random();
    constructor(title: string = 'default text') {
        this.title = title;
    }
    @action.bound
    increment() {
        this.counter++ // 'this' will always be correct
    }
}

// class TodoList {
//     @observable todos = [];
//     @computed get unfinishedTodoCount() {
//         return this.todos.filter(todo => !todo.finished).length;
//     }
// }

const TodoStore = new TodoStoreClass();

export default TodoStore


