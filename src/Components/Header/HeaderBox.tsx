import React from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../../hooks/useIsMobile';

interface Props {
  isRed?: boolean;
  title: string;
  text: string;
}

export const HeaderBox = ({ isRed, title, text }: Props) => {
  const isMobile = useIsMobile();
  return (
    <Wrapper isRed={isRed} isMobile={isMobile}>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isRed?: boolean; isMobile: boolean }>`
  width: 250px;
  height: 250px;
  background-color: ${({ theme, isRed }) =>
    isRed ? theme.colors.red : theme.colors.darkBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ isMobile }) => isMobile && '20px'};

  h2 {
    font-size: ${({ theme }) => `${theme.fontSizes[7]}px`};
    margin: 0;
  }
`;
