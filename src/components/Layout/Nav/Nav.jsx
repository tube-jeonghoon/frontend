import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={`${styles.container} absolute text-white h-full`}>
      {/* ----- MenuContainer ----- */}
      <ul className={`${styles.menuContainer}`}>

        {/* ----- menu1Wrap ----- */}
        <div className={`${styles.menuWrap1}`}>
          <li>HOME</li>
          <li>RANKING</li>
        </div>

        {/* ----- menu2Wrap ----- */}
        <div className={`${styles.menuWrap2}`}>

          <li>
            <div className={`${styles.login}`}>
              <span className={`${styles.text}`}>LOGIN</span>
            </div>
          </li>

          {/* <div className={`${styles.login}`}>
              <span className={`${styles.text}`}>LOGIN</span>
            </div> */}

          <li>WRITE</li>
        </div>


      </ul>
    </nav>
  );
};

export default Nav;
