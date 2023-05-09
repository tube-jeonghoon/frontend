import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
  <div className={`${styles.container} absolute`}>
    <img src={process.env.PUBLIC_URL + 'logo_bangmoon.png'} alt="logo" />
    </div>
    );
};

export default Header;
