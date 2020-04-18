import React from 'react';
import styled from 'styled-components';

type Todo = {
  id: number;
  title: string;
  status: boolean;
};

type Props = {
  list: Todo[];
};

const TodoList: React.FC<Props> = ({ list = [] }) => {
  return (
    <ListWrapper>
      <List>
        {list.map(({ title }) => (
          <Item>
            {title}
            <ItemControl>
              <span>&#10000;</span>
              <span>&#x2716;</span>
            </ItemControl>
          </Item>
        ))}
      </List>
    </ListWrapper>
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

const ItemControl = styled.div`
  width: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default TodoList;
