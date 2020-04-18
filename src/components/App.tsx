import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import TodoControl from './TodoControl';
import TodoList from './TodoList';

type Props = {
  store: any;
};

const list = [
  { id: 1, title: 'go shopping', status: false },
  { id: 2, title: 'read the book', status: false },
  { id: 3, title: 'have a run', status: false },
];

const App: React.FC<Props> = observer(({ store }) => {
  return (
    <Wrapper>
      <SectionTitle title="Todo list" />
      <TodoControl />
      <TodoList list={list} />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;

export default App;
