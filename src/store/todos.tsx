import { types } from 'mobx-state-tree';

const Item = types.model({
  id: types.number,
  title: types.string,
  status: types.boolean,
});

export const todos = types
  .model({
    list: types.array(Item),
    filter: types.string,
    editingList: types.array(types.number),
  })
  .views(self => ({
    get filteredList() {
      const match = new RegExp(self.filter, 'i');

      return self.list.filter(item => match.test(item.title));
    },
  }))
  .actions(self => ({
    addTodo(title: string) {
      const newTodo = {
        id: self.list.length + 1,
        title,
        status: false,
      };

      self.list.push(newTodo);
    },
    removeTodo(id: number) {
      const confirmation = window.confirm('Are you sure?');
      const itemList = self.list.find(i => i.id === id);

      if (confirmation && itemList) {
        self.list.splice(self.list.indexOf(itemList), 1);
      }
    },
    updateFilter(value: string) {
      self.filter = value;
    },
    addToEdit(id: number) {
      self.editingList.push(id);
    },

    removeFromEdit(id: number) {
      const idIndex = self.editingList.indexOf(id);

      self.editingList.splice(idIndex, 1);
    },
  }))
  .actions(self => ({
    saveEdit: (id: number, title: string) => {
      const itemList = self.list.find(i => i.id === id);

      if (itemList) {
        itemList.title = title;
        self.list.splice(self.list.indexOf(itemList), 1, itemList);
      }

      self.removeFromEdit(id);
    },
  }));
