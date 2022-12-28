import React from 'react';
import styled from 'styled-components';
import EngineerIcon from '../../../Icons/engineer.png';
import RulerIcon from '../../../Icons/ruler.png';
import ToolIcon from '../../../Icons/measuring-tool.png';
import { useIsMobile } from '../../../hooks/useIsMobile';
import { ServicesListItem } from './ServicesListItem';

export const HeaderCard = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper isMobile={isMobile}>
      <h2>We construct and Manage Places and Infrastructures</h2>
      <div>
        <ServicesListItem
          img={EngineerIcon}
          title="General contruct"
          text="Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum"
        />
        <ServicesListItem
          img={RulerIcon}
          title="General contruct"
          text="Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum"
        />
        <ServicesListItem
          img={ToolIcon}
          title="General contruct"
          text="Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isMobile: boolean }>`
  height: 500px;
  width: ${({ isMobile }) => (isMobile ? 'auto' : '420px')};
  position: ${({ isMobile }) => (isMobile ? 'initial' : 'absolute')};
  background-color: ${({ theme }) => theme.colors.white};
  bottom: -100px;
  right: 0;
  box-shadow: 0 0 24px 0 rgba(66, 68, 90, 1);
  border-top: ${({ theme }) => `10px solid ${theme.colors.darkBlue}`};
  padding: 40px 40px;

  h2 {
    font-size: ${({ theme, isMobile }) =>
      isMobile ? `${theme.fontSizes[4]}px` : `${theme.fontSizes[6]}px`};
    color: ${({ theme }) => theme.colors.darkBlue};
    margin: 0 0 20px;
  }
`;
