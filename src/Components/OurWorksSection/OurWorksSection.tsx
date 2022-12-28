import React from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../../hooks/useIsMobile';
import { ExampeWork } from './ExampeWork';

export const OurWorksSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper isMobile={isMobile}>
      <h2>Projekty</h2>
      <ExampeWork title="Dachy" />
      <ExampeWork title="Mieszkania" />
      <ExampeWork title="Elewacje" />
    </Wrapper>
  );
};

const Wrapper = styled.section<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  margin: ${({ isMobile }) => (isMobile ? '40px auto' : '100px auto')};
  padding: ${({ isMobile }) => isMobile && '0 20px'};
  color: ${({ theme }) => theme.colors.darkBlue};

  h2 {
    font-size: ${({ theme }) => `${theme.fontSizes[6]}px`};
    text-align: center;
  }

  h3 {
    font-size: ${({ theme }) => `${theme.fontSizes[5]}px`};
    text-align: center;
  }
`;
