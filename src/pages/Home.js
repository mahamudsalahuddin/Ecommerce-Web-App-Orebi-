import React from 'react'
import AdditionalInfo from '../components/layout/AdditionalInfo';
import Advertise from '../components/layout/Advertise';
import Banner from '../components/layout/Banner'
import NewArrival from '../components/layout/NewArrival';
import Bestseller from '../components/layout/Bestseller';
import MiddleAdvertisement from '../components/layout/MiddleAdvertisement';
import Offers from '../components/layout/Offers';
import Footer from '../components/layout/Footer';
import FooterDown from '../components/layout/FooterDown';

const Home = () => {
  return (
    <>
      <Banner/>
      <AdditionalInfo/>
      <Advertise/>
      <NewArrival/>
      <Bestseller/>
      <MiddleAdvertisement/>
      <Offers/>
      <Footer/>
      <FooterDown/>
    </>
  );
};

export default Home