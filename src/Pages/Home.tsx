import React from 'react';
import { useQuery } from 'graphql-hooks';
import { Header } from '../Components/Header/Header';
import { HomeAboutUsSection } from '../Components/HomeAboutUsSection';
import { OurWorksSection } from '../Components/OurWorksSection/OurWorksSection';
import { ImagesQuery } from '../api/getImages';

export const Home = () => {
  const { loading, error, data } = useQuery(ImagesQuery, {
    variables: {
      limit: 10,
    },
  });
  return (
    <>
      <Header />
      <HomeAboutUsSection />
      <OurWorksSection data={data?.allUploads} loading={loading} />
    </>
  );
};
