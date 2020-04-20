import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { useStore } from '../store/store';

const Counter = observer(() => {
  const { count, incrementCount, decrementCount } = useStore();

  return (
    <CounterWrapper>
      <Button type="button" onClick={incrementCount}>
        +
      </Button>
      <Count>{count}</Count>
      <Button type="button" onClick={decrementCount}>
        -
      </Button>
    </CounterWrapper>
  );
});

const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px 15px;
`;

const Count = styled.span`
  margin: 0 20px;
  font-size: 24px;
`;

export default Counter;
