import React, { useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { useStore } from '../store/store';
import { InputT } from '../types';

const TodoControl = observer(() => {
  const [todoValue, setTodoValue] = useState('');
  const { addTodo, filter, updateFilter } = useStore();

  const addNewTodo = () => {
    addTodo(todoValue);
    setTodoValue('');
  };

  return (
    <ControlWrapper>
      <>
        <Input
          value={filter}
          onChange={(e: InputT) => updateFilter(e.target.value)}
          type="text"
          placeholder="filer tasks ..."
        />
      </>
      <div>
        <Input
          type="text"
          placeholder="new task ..."
          value={todoValue}
          onChange={(e: InputT) => setTodoValue(e.target.value)}
        />
        <Button type="button" onClick={addNewTodo}>
          Add
        </Button>
      </div>
    </ControlWrapper>
  );
});

const Input = styled.input<any>`
  width: 300px;
  padding: 10px 15px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px 15px;
  margin-left: 20px;
`;

const ControlWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export default TodoControl;
