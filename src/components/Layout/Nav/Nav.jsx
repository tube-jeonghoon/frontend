import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={`${styles.container} absolute text-white h-full`}>
      {/* ----- MenuContainer ----- */}
      <ul className={`${styles.menuContainer}`}>
          <li>HOME</li>
          <li>RANKING</li>
          <li>
            <div className={`${styles.login}`}>
              <span className={`${styles.text}`}>LOGIN</span>
            </div>
          </li>
          <li className={`${styles.write}`}>WRITE</li>
      </ul>
    </nav>
  );
};

export default Nav;
