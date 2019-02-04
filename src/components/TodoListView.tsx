import React, { Component } from 'react';
import { observable, computed } from 'mobx'
import { observer} from 'mobx-react'
import { Store } from "../store/Store";


@observer
class TodoListView extends Component {
    render() {
        return <div>
            Counter: {Store.CounterStore.counter}
                <button onClick={()=> Store.CounterStore.increment()} type="button">add count</button>
                <button onClick={()=> Store.CounterStore.decriment()} type="button"  disabled={Store.CounterStore.counter === 0}>remove count</button>
        </div>
    }
}

export default TodoListView