import { observable, computed, action } from 'mobx'
import { observer} from 'mobx-react'

class CounterStore {
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

export default CounterStore;
