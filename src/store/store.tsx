import { useContext, createContext } from 'react';
import { observable, configure, action, computed } from 'mobx';
import { Todo } from '../types';

configure({ enforceActions: 'observed' });

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
  },
  {
    addTodo: action,
    removeTodo: action,
    addToEdit: action,
    updateFilter: action,
    filteredList: computed,
    removeFromEdit: action,
    saveEdit: action,
  },
);

const RootStoreContext = createContext(rootStore);

// eslint-disable-next-line import/prefer-default-export
export const useStore = () => useContext(RootStoreContext);
