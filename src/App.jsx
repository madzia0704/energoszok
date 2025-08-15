import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import Contact from './components/Contact';

const App = () => (
  <div>
    <Navbar />
    <Carousel />
    <Header />
    <Offer />
    <Contact />
    <Footer />
  </div>
);

export default App;
