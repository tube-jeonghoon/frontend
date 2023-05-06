import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
  <div className={`${styles.container} absolute`}>
    <p>Copyright 2023. J & J</p>
    <p>All rights reserved.</p>
  </div>
  );
};

export default Footer;
