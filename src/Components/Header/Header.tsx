import React from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Button } from '../Button';
import { HeaderBox } from './HeaderBox';
import { HeaderCard } from './HeaderCard/HeaderCard';

export const Header = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper isMobile={isMobile}>
      <Hero>
        <div>
          <Content isMobile={isMobile}>
            <h2>Usługi remontowo budowlane</h2>
            <h1>Adam Żochowski</h1>
            <Button text={'Dowiedz się więcej'} />
          </Content>
        </div>
      </Hero>
      <InfoWrapper isMobile={isMobile}>
        <HeaderBox title="100+" text="Ukończonych projektów" />
        <HeaderBox isRed title="20+" text="Lat doświadczenia" />
        <HeaderCard />
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isMobile: boolean }>`
  height: ${({ isMobile }) => (isMobile ? '100%' : 'calc(100vh - 80px)')};
  display: flex;
  flex-direction: column;
`;

const Hero = styled.div`
  height: 70vh;
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

const InfoWrapper = styled.div<{ isMobile: boolean }>`
  max-width: 1000px;
  width: ${({ isMobile }) => !isMobile && '1000px'};
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  margin: 0 auto;
  position: relative;
  align-items: ${({ isMobile }) => (isMobile ? 'center' : 'unset')};
  padding: ${({ isMobile }) => (isMobile ? '20px' : '0')};
`;
