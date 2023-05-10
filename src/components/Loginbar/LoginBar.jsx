import React, { useEffect } from 'react';
import styles from './LoginBar.module.css';
import Cookies from 'js-cookie';
import axios from 'axios';

const LoginBar = () => {
  // nickname 출력을 위한 post 요청
  const nickname = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/posts/nickname`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      console.log(token);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    nickname();
  }, []);

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
