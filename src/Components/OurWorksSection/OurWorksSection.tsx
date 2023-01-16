import React from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../../hooks/useIsMobile';
import { ExampleWork } from './ExampleWork';

interface Props {
  data: any;
  loading: boolean;
}

export const OurWorksSection = ({ data, loading }: Props) => {
  const isMobile = useIsMobile();
  const tags =
    data &&
    [].concat(
      ...data.map((object) => object.tags.length && object.tags[0].split(', ')),
    );
  const uniqueTags =
    data &&
    tags.filter(
      (tag, index) => tags.indexOf(tag) === index && typeof tag === 'string',
    );
  return (
    <Wrapper isMobile={isMobile}>
      <h2>Nasza oferta</h2>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {uniqueTags.length &&
            uniqueTags.map((item) => (
              <ExampleWork
                key={item}
                title={
                  item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
                }
                items={
                  data &&
                  data.filter(
                    (i) => !!i.tags[0] && i.tags[0].split(', ').includes(item),
                  )
                }
              />
            ))}
        </>
      )}
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
