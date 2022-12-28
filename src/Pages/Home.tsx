import React from 'react';
import { Header } from '../Components/Header/Header';
import { HomeAboutUsSection } from '../Components/HomeAboutUsSection';
import { OurWorksSection } from '../Components/OurWorksSection/OurWorksSection';

export const Home = () => {
  return (
    <>
      <Header />
      <HomeAboutUsSection />
      <OurWorksSection />
    </>
  );
};
