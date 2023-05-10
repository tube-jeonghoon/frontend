import React, { useEffect, useState } from 'react';
import styles from './LoginBar.module.css';
import Cookies from 'js-cookie';
import axios from 'axios';

const LoginBar = () => {
  const [nickname, setNickname] = useState('');

  /**
   * 서버에 저장된 닉네임 데이터를 가져오기 위한 API 요청을 수행하는 함수
   */
  const fetchNickname = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/posts/nickname`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setNickname(response.data.nickname);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNickname();
  }, []);

  return (
    <div className={`${styles.container} absolute h-full`}>
      <div className={`${styles.wrap}`}>
        <div className={`${styles.circle1}`}></div>
        {nickname && (
          <div className={`${styles.text}`}>{`${nickname}님, 안녕하세요!`}</div>
        )}
        {!nickname && (
          <div className={`${styles.text}`}>로그인이 필요합니다.</div>
        )}
        <div className={`${styles.circle2}`}></div>
      </div>
    </div>
  );
};

export default LoginBar;
