import { observable, computed, action } from 'mobx'
import { observer} from 'mobx-react'

class CounterClass {
    @observable counter: number = 0;
    @action.bound
    increment() {
        this.counter++
    }
    @action.bound
    decriment() {
        this.counter === 0 ? null : this.counter--
    }
}

const CounterStore = new CounterClass();

export default CounterStore
