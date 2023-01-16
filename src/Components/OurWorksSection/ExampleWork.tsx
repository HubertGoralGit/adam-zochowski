import React from 'react';
import { Carousel } from './Carousel';

interface Props {
  title: string;
  items?: any;
}

export const ExampleWork = ({ title, items }: Props) => {
  if (!items) {
    return null;
  }
  return (
    <div>
      <h3>{title}</h3>
      <Carousel images={items.map((item) => item.responsiveImage.src)} />
    </div>
  );
};
