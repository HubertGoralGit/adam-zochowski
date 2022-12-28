import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

export const Button = ({ text }: Props) => {
  return <StyledButton>{text}</StyledButton>;
};

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
`;
