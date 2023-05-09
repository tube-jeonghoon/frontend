import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <div className={`${styles.container} absolute`}>
    <Link to={'/'}><img src={process.env.PUBLIC_URL + '/logo_bangmoon.png'} alt="logo" /></Link>
    </div>
    );
};

export default Header;
