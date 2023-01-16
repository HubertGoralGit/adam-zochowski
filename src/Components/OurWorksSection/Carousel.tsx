import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styled from 'styled-components';
import HomeImage from '../../Images/dom.jpg';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Button } from '../Button';

interface Props {
  images: string[];
}

export const Carousel = ({ images }: Props) => {
  const isMobile = useIsMobile();
  return (
    <Swiper
      slidesPerView={isMobile ? 1 : 3}
      pagination={true}
      modules={[Pagination]}
      className="mySwiper"
    >
      {images.map((image) => (
        <StyledSwiperSlide key={image}>
          <Image src={image} />
        </StyledSwiperSlide>
      ))}
      <StyledSwiperSlide>
        <Image src={images[images.length - 1]} />
        <div>
          <Button text="Zobacz więcej" />
        </div>
      </StyledSwiperSlide>
    </Swiper>
  );
};

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Image = styled.img`
  height: 400px;
  width: 100%;
`;
