import React, { Component } from 'react';
import { observable, computed } from 'mobx'
import { observer} from 'mobx-react'
import TodoStore from "./store/TodoStore";

@observer
class TodoListView extends Component {
    render() {
        return <div>
            <ul>
                {/* {this.props.todoList.todos.map(todo => 
                    <TodoView todo={todo} key={todo.id} />
                )} */}
            </ul>
            Tasks left: {TodoStore.title}
            <br />
            Counter: {TodoStore.counter} <button type="button">add count</button>
        </div>
    }
}

export default TodoListView