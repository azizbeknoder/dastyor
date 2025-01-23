import React from 'react';
import './main.css';
import Banner from './banners/Banner';
import SocialLink from './socialLinks/SocialLink';
import Advantages from './advantages/Advantages';
import Servises from './servises/Servises';
import AboutUs from './aboutUs/AboutUs';
import AutoPark from './autopark/AutoPark';
import Feedbacks from './feedbacks/Feedbacks';
import { Helmet } from 'react-helmet';

const Main = () => {
  return (
    <div id="main" className="main">
      <Helmet>
        <title>Dastyor</title>
        <meta name="description" content="Ko‘chirish uchun yuk tashuvchilar" /> 
        <meta name="keywords" content="Ko'chish xizmati, Yuk tashuvchilar xizmati, Ofisni ko'chirish" />
      </Helmet>
      <Banner />
      <SocialLink />
      <AboutUs />
      <Advantages />
      <Servises />
      <AutoPark />
      <Feedbacks />
    </div>
  );
};

export default Main;