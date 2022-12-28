import React from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../../hooks/useIsMobile';

export const HomeAboutUsSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper isMobile={isMobile}>
      <h2>O nas</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in
        mollis nunc sed. Posuere ac ut consequat semper viverra nam libero justo
        laoreet. Turpis egestas pretium aenean pharetra magna ac. Turpis in eu
        mi bibendum neque. Vulputate enim nulla aliquet porttitor. Egestas
        egestas fringilla phasellus faucibus scelerisque eleifend donec. At
        imperdiet dui accumsan sit amet. Libero id faucibus nisl tincidunt eget
        nullam non. Purus non enim praesent elementum facilisis leo vel
        fringilla est. At consectetur lorem donec massa sapien. Faucibus turpis
        in eu mi bibendum neque. Scelerisque felis imperdiet proin fermentum.
        Egestas sed tempus urna et. Bibendum est ultricies integer quis auctor
        elit. Dui sapien eget mi proin sed libero enim sed faucibus. Fusce id
        velit ut tortor pretium viverra suspendisse potenti nullam. Elit duis
        tristique sollicitudin nibh. Viverra orci sagittis eu volutpat odio.
        Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
        tristique senectus et.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: ${({ isMobile }) => (isMobile ? '40px auto' : '100px auto')};
  padding: ${({ isMobile }) => isMobile && '0 20px'};
  color: ${({ theme }) => theme.colors.darkBlue};

  h2 {
    font-size: ${({ theme }) => `${theme.fontSizes[6]}px`};
    text-align: center;
  }
`;
