import React from 'react';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Nav />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
