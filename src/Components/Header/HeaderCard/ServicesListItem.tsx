import React from 'react';
import styled from 'styled-components';

interface Props {
  img: string;
  title: string;
  text: string;
}

export const ServicesListItem = ({ img, title, text }: Props) => {
  return (
    <Wrapper>
      <img src={img} />
      <div>
        <Title>{title}</Title>
        <p>{text}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 60px;
    height: 60px;
    margin-right: 20px;
  }

  p {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

const Title = styled.p`
  font-weight: bold;
`;
