import { types, flow } from 'mobx-state-tree';

// 1s delay
const delay = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

export const counter = types
  .model({
    // count: types.optional(types.number, 2),
    count: types.number,
  })
  .actions(self => ({
    increment: flow(function* () {
      yield delay();
      self.count += 1;
    }),
    decrement: flow(function* () {
      yield delay();
      self.count -= 1;
    }),
  }));
