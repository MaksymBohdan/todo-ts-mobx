import { useContext, createContext } from 'react';
import { configure } from 'mobx';
import { types } from 'mobx-state-tree';
import { counter } from './counter';
import { todos } from './todos';

configure({ enforceActions: 'observed' });

const RootModel = types.model({
  counter,
  todos,
});

const list = [
  { id: 1, title: 'go shopping', status: false },
  { id: 2, title: 'read the book', status: false },
  { id: 3, title: 'have a run', status: false },
];

const store = RootModel.create({
  counter: { count: 0 },
  todos: { list, filter: '', editingList: [] },
});

const storeContext = createContext(store);

export const useStoreContext = () => useContext(storeContext);

/*
import { Todo } from '../types';
import { observable, configure, action, computed, runInAction } from 'mobx';


type RootStoreType = {
  list: Todo[];
  editingList: number[];
  addTodo: (todoValue: string) => void;
  removeTodo: (id: number) => void;
  filter: string;
  updateFilter: (value: string) => void;
  filteredList: Todo[];
  addToEdit: (id: number) => void;
  removeFromEdit: (id: number) => void;
  saveEdit: (id: number, title: string) => void;
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
};

const rootStore: RootStoreType = observable(

  {
      list: [
        { id: 1, title: 'go shopping', status: false },
        { id: 2, title: 'read the book', status: false },
        { id: 3, title: 'have a run', status: false },
      ],
  
      addTodo: (todoValue: string) => {
        const newTodo: Todo = {
          id: rootStore.list.length + 1,
          title: todoValue,
          status: false,
        };
  
        rootStore.list.push(newTodo);
      },
  
      removeTodo: (id: number) => {
        const confirmation = window.confirm('Are you sure?');
  
        if (confirmation) {
          rootStore.list = rootStore.list.filter(todo => todo.id !== id);
        }
      },
  
      // filtering
      filter: '',
  
      updateFilter: (value: string) => {
        rootStore.filter = value;
      },
  
      get filteredList() {
        const match = new RegExp(rootStore.filter, 'i');
  
        return rootStore.list.filter(item => match.test(item.title));
      },
  
      // editing
      editingList: [],
  
      addToEdit: (id: number) => {
        rootStore.editingList.push(id);
      },
  
      removeFromEdit: (id: number) => {
        rootStore.editingList = rootStore.editingList.filter(item => item !== id);
      },
  
      saveEdit: (id: number, title: string) => {
        rootStore.list = rootStore.list.map(item =>
          item.id === id ? { ...item, title } : item,
        );
  
        rootStore.removeFromEdit(id);
      },
  
      count: 0,
      incrementCount: () => {
        setTimeout(() => {
          runInAction(() => {
            rootStore.count += 1;
          });
        }, 2000);
      },
      decrementCount: () => {
        setTimeout(() => {
          runInAction(() => {
            rootStore.count -= 1;
          });
        }, 2000);
      },
    },
    {
      addTodo: action,
      removeTodo: action,
      addToEdit: action,
      updateFilter: action,
      filteredList: computed,
      removeFromEdit: action,
      saveEdit: action,
      incrementCount: action,
      decrementCount: action,
    },
  );

  const RootStoreContext = createContext(rootStore);

// eslint-disable-next-line import/prefer-default-export
export const useStore = () => useContext(RootStoreContext);


 */
