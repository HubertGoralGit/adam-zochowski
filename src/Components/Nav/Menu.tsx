import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { menuItems } from '../../utils/menuItems';

interface Props {
  open: boolean;
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export const Menu = ({ open, handleLinkClick }: Props) => {
  return (
    <StyledMenu open={open}>
      {menuItems.map((link) => (
        <Link to={link.url} onClick={handleLinkClick} key={link.name}>
          {link.name}
        </Link>
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.darkBlue};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 8;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;
