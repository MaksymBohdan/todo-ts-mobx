import React, { useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { useStoreContext } from '../store/store';
import { InputT, Todo } from '../types';

/*
 ** LIST COMPONENT
 */

const TodoList: React.FC<{}> = observer(() => {
  const { todos } = useStoreContext();
  const { filteredList, editingList } = todos;

  return (
    <ListWrapper>
      <List>
        {filteredList.map(item =>
          editingList.includes(item.id) ? (
            <EditItemCmp key={item.id} item={item} />
          ) : (
            <ItemCmp key={item.id} item={item} />
          ),
        )}
      </List>
    </ListWrapper>
  );
});

/*
 ** ITEM COMPONENT
 */

type ItemProps = {
  item: Todo;
};

const ItemCmp: React.FC<ItemProps> = ({ item: { title, id } }) => {
  const { todos } = useStoreContext();
  const { removeTodo, addToEdit } = todos;

  return (
    <Item>
      <TitleWrapper>{title}</TitleWrapper>
      <ItemControl>
        <SymbolElement onClick={() => addToEdit(id)}>&#10000;</SymbolElement>
        <SymbolElement onClick={() => removeTodo(id)}>&#x2716;</SymbolElement>
      </ItemControl>
    </Item>
  );
};

/*
 ** EDIT ITEM COMPONENT
 */

type EditItemType = {
  item: Todo;
};

const EditItemCmp: React.FC<EditItemType> = ({ item: { title, id } }) => {
  const [editValue, setEditValue] = useState(title || '');

  const { todos } = useStoreContext();
  const { removeFromEdit, saveEdit } = todos;

  return (
    <Item>
      <TitleWrapper>
        <input
          value={editValue}
          onChange={(e: InputT) => setEditValue(e.target.value)}
        />
      </TitleWrapper>
      <ItemControl>
        <SymbolElement onClick={() => saveEdit(id, editValue)}>
          &#10004;
        </SymbolElement>
        <SymbolElement onClick={() => removeFromEdit(id)}>
          &#10140;
        </SymbolElement>
      </ItemControl>
    </Item>
  );
};

const ListWrapper = styled.section`
  border: 1px solid #838383;
  box-sizing: border-box;
  padding: 20px;
`;

const List = styled.ul`
  min-height: 100px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  border: 1px solid #838383;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  &: last-child {
    margin-bottom: 0;
  }
`;
const TitleWrapper = styled.div`
  height: 20px;
`;

const ItemControl = styled.div`
  width: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SymbolElement = styled.span`
  cursor: pointer;
`;

export default TodoList;
