import React from 'react';
import styles from './LoginBar.module.css';

const LoginBar = () => {
  return (
    <div className={`${styles.container} absolute h-full`}>
      <div className={`${styles.wrap}`}>
        <div className={`${styles.circle1}`}></div>
        <div className={`${styles.text}`}>로그인이 필요합니다.</div>
        <div className={`${styles.circle2}`}></div>
      </div>
    </div>
  );
};

export default LoginBar;