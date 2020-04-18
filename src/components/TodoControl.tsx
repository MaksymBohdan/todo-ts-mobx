import React from 'react';
import styled from 'styled-components';

const TodoControl = () => {
  return (
    <ControlWrapper>
      <>
        <Input type="text" placeholder="filer tasks ..." />
      </>
      <div>
        <Input type="text" placeholder="new task ..." />
        <Button type="button">Add</Button>
      </div>
    </ControlWrapper>
  );
};

const Input = styled.input`
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
