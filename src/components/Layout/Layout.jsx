import React from 'react';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.inner}`}>
          <Header />
          <Nav />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
