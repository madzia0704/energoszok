import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactMapSection from './components/ContactMapSection';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Offer from './components/Offer';

const App = () => (
  <div>
    <Navbar />
    <Carousel />
    <Header />
    <Offer />
    {/* <MainSection /> */}
    <ContactMapSection />
    <Footer />
  </div>
);

export default App;
