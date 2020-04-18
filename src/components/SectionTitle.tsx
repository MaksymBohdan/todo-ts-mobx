import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
};

const SectionTitle: React.FC<Props> = ({ title }) => {
  return <Heading>{title}</Heading>;
};

const Heading = styled.h1`
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #838383;
`;

export default SectionTitle;
