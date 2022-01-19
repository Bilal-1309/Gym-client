import React from 'react';
import Header from './Header/'
import Gallery from './Gallery/'
import Subscriptions from './Subscriptions';
import Contacts from './Contacts';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Subscriptions />
      <Gallery />
      <Contacts />
      <Footer />
    </div>
  );
};

export default HomePage;