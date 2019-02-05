import NotesStore from "./NotesStore";
import CounterStore from "./CounterStore";


interface IClassStore {
    NotesStore: NotesStore,
    CounterStore: CounterStore,
}

export interface Istore {
    Store: IClassStore 
}

export const Store = {
    NotesStore: new NotesStore(),
    CounterStore: new CounterStore(),
};
