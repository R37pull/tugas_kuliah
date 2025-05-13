import React from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import TrendingSection from './components/TrendingSection';
import ContactSection from './components/ContactSection';


const App = () => {
  return (
    <>
      <Header />
      <MainSection />
      <TrendingSection />
      <ContactSection />
      <Footer />
      </>
  );
};

export default App;
