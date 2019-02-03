import React, { Component } from 'react';
import { observable, computed } from 'mobx'
import { observer} from 'mobx-react'
import CounterStore from "../store/CounterStore";

@observer
class TodoListView extends Component {
    render() {
        return <div>
            Counter: {CounterStore.counter}
                <button onClick={()=> CounterStore.increment()} type="button">add count</button>
                <button onClick={()=> CounterStore.decriment()} type="button"  disabled={CounterStore.counter === 0}>remove count</button>
        </div>
    }
}

export default TodoListView