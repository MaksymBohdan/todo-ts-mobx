import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import TodoControl from './TodoControl';
import TodoList from './TodoList';

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <Wrapper>
      <SectionTitle title="Todo list" />
      <TodoControl />
      <TodoList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;

export default App;
