import React from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
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
