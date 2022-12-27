import React from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../hooks/useIsMobile';
import { Button } from './Button';

export const Header = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <div>
        <Content isMobile={isMobile}>
          <h2>Usługi wykończeniowe</h2>
          <h1>Adam Żochowski</h1>
          <Button text={'Dowiedz się więcej'} />
        </Content>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 80vh;
  width: 100%;
  background: url('https://biams.pl/wp-content/uploads/2020/12/projekty-dom%C3%B3w-z-poddaszem-973x547.jpg')
    bottom center no-repeat;
  background-size: cover;
  position: relative;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Content = styled.div<{ isMobile: boolean }>`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};

  h2 {
    font-size: ${({ theme, isMobile }) =>
      isMobile ? `${theme.fontSizes[4]}px` : `${theme.fontSizes[5]}px`};
    margin: 0 0 20px;
  }

  h1 {
    font-size: ${({ theme, isMobile }) =>
      isMobile ? `${theme.fontSizes[6]}px` : `${theme.fontSizes[7]}px`};
    margin: 0 0 80px;
  }
`;
