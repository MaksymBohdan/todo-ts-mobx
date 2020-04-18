import { observable, configure, action } from 'mobx';

configure({ enforceActions: 'observed' });

export default observable(
  {
    init: 0,
    increment() {
      this.init++;
    },
    decrement() {
      this.init--;
    },
  },
  {
    increment: action('plus'),
    decrement: action('minus'),
  },
);
