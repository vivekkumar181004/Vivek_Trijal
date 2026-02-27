import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Contact from './Contact';
import Industries from '../components/Industries';
import WhyChoose from '../components/WhyChoose';
import WhoWeAre from '../components/WhoWeAre';
import Products from '../components/Products';
import HomeServices from '../components/Services';
import AboutUs from '../components/AboutUs';
import ClientsSlider from '../components/ClientsSlider';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <HomeServices />
      <Products />
      <WhoWeAre />
      <WhyChoose />
      <Industries />
      <ClientsSlider />
      <Footer />

    </div>
  );
}

export default Home;
