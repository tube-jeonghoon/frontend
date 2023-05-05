import React from 'react';
import styles from './Signup.module.css';

const Signup = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.innerBox}`}>
        {/* ---------- Title ---------- */}
        <div className={`${styles.titleBox}`}>BANG MOON</div>

        {/* ---------- Email ---------- */}
        <div className="emailBox">
          <input
            type="email"
            className={`${styles.mailInput} mt-1 px-4 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
            placeholder="you@email.com"
          />
        </div>

        {/* ---------- NickName ---------- */}
        <div className="nickName">
          <input
            type="email"
            className={`${styles.nickName} mt-1 px-4 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
            placeholder="닉네임"
          />
        </div>

        {/* ---------- Password ---------- */}
        <div className="passwordBox">
          <input
            type="password"
            className={`${styles.passwordBox} mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
            placeholder="비밀번호"
          />
        </div>

        {/* RePassword */}
        <div className="rePasswordBox">
          <input
            type="password"
            className={`${styles.rePasswordBox} mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
            placeholder="비밀번호 확인"
          />
        </div>

        {/* ---------- SignUpBox ---------- */}
        <div className={`${styles.signUpBox} `}>
          <button className={`${styles.signBtn}`}>로그인</button>
        </div>

        {/* ---------- loginLine ---------- */}
        <div className={`${styles.loginLine}`}>
          <span className={`${styles.loginHrL}`}></span>
          <div style={{ marginRight: '34px' }}>또는</div>
          <span className={`${styles.loginHrR}`}></span>
        </div>

        {/* ---------- signUp ---------- */}
        <div className={`${styles.loginBox}`}>
          <div>계정이 없으신가요?</div>
          <button className={`${styles.loginBtn}`}>가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
