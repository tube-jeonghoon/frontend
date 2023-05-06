import React from 'react';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './Layout.module.css';
import LoginBar from '../Loginbar/LoginBar';

const Layout = ({ children }) => {
  return (
    <>
      <div className={`${styles.container}`}>
        <Header />
        <Footer />
        <div className={`${styles.inner} relative`}>
          <LoginBar />
          {children}
          <Nav />
          <div className={`${styles.lt} absolute text-white font-bold`}>
            구석구석
          </div>
          <div className={`${styles.rb} absolute text-white font-bold`}>
            모아모아
          </div>
          <div className={`${styles.rt} absolute font-bold`}>#F24822</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
