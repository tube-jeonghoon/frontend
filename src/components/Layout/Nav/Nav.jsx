import React from 'react';
import styles from './Nav.module.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  // login 페이지로 이동
  const handleLogin = () => {
    const token = Cookies.get('token');
    console.log('nav token:', token);
    navigate('/login');
  };
  return (
    <nav className={`${styles.container} absolute text-white h-full`}>
      {/* ----- MenuContainer ----- */}
      <ul className={`${styles.menuContainer}`}>
          <li><Link to={'/'}>HOME</Link></li>
          <li>RANKING</li>
          <li>
            <Link to={'/login'} className={`${styles.login}`}>
              <span className={`${styles.text}`}>LOGIN</span>
            </Link>
          </li>
          <li className={`${styles.write}`}><Link to={'/posts'}>WRITE</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
