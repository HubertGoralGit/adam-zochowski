import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useIsMobile';
import { menuItems } from '../../utils/menuItems';
import { Menu } from './Menu';
import { Burger } from './Burger';

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  return (
    <StyledNav open={open}>
      <h1>Adam</h1>
      {isMobile ? (
        <>
          <Burger open={open} handleClick={() => setOpen(!open)} />
          <Menu open={open} handleLinkClick={() => setOpen(false)} />
        </>
      ) : (
        <nav>
          {menuItems.map((link) => (
            <StyledLink to={link.url} key={link.name}>
              {link.name}
            </StyledLink>
          ))}
        </nav>
      )}
    </StyledNav>
  );
};

const StyledNav = styled.header<{ open: boolean }>`
  height: 60px;
  width: calc(100vw - 40px);
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: width 2s;
  max-width: 1000px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    height: 80px;
    width: calc(100vw - 80px);
  }

  h1 {
    color: ${({ theme, open }) =>
      open ? theme.colors.white : theme.colors.darkBlue};
    z-index: 10;
  }
`;

const StyledLink = styled(Link)`
  margin-left: 64px;
  font-size: ${({ theme }) => `${theme.fontSizes[3]}px`};
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: bold;
  text-decoration: none;
`;
