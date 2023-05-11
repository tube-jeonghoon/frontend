import React, { useState } from 'react';
import styles from './Nav.module.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { MdLogin, MdLogout } from 'react-icons/md';
import Cookies from 'js-cookie';

const Nav = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('token'));

  // 로그아웃 버튼 클릭 시 실행되는 함수
  const handleLogout = () => {
    Cookies.remove('token');
    setIsLoggedIn(false);
  };

  // login 페이지로 이동
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <nav className={`${styles.container} absolute text-white h-full`}>
      {/* ----- MenuContainer ----- */}
      <ul className={`${styles.menuContainer}`}>
        <li>
          <Link to={'/'}>HOME</Link>
        </li>
        <li>RANKING</li>
        {isLoggedIn ? (
          <li onClick={handleLogout}>
            <Link to={'/login'} className={`${styles.login}`}>
              <MdLogout />
              <span className={`${styles.text}`}>LOGOUT</span>
            </Link>
          </li>
        ) : (
          <li onClick={handleLogin}>
            <Link to={'/login'} className={`${styles.login}`}>
              <MdLogin />
              <span className={`${styles.text}`}>LOGIN</span>
            </Link>
          </li>
        )}
        <li className={`${styles.write}`}>
          <Link to={'/posts'}>POST</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
