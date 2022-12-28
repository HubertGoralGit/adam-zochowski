import React from 'react';
import { Carousel } from './Carousel';

interface Props {
  title: string;
}

export const ExampeWork = ({ title }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      <Carousel />
    </div>
  );
};
