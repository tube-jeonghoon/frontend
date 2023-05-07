import React, { useState } from 'react';
import styles from './Signup.module.css';

const Signup = () => {
  // ---------- 인풋 박스에 들어올 데이터를 위한 useState ----------
  const [emailInput, setEmailInput] = useState('');
  const [nicknameInput, setNicknameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordCheckInput, setPasswordCheckInput] = useState('');

  // ---------- 이메일 인풋 핸들러 ----------
  const emailInputHandler = (e) => {
    setEmailInput(e.target.value);
  };

  // ---------- 닉네임 인풋 핸들러 ----------
  const nicknameInputHandler = (e) => {
    setNicknameInput(e.target.value);
  };

  // ---------- 패스워드 인풋 핸들러 ----------
  const passwordInputHandler = (e) => {
    setPasswordInput(e.target.value);
  };

  // ---------- 패스워드 확인 핸들러 ----------
  const passwordCheckInputHandler = (e) => {
    setPasswordCheckInput(e.target.value);
  };

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
            value={emailInput}
            onChange={emailInputHandler}
          />
        </div>

        {/* ---------- NickName ---------- */}
        <div className="nickName">
          <input
            type="email"
            className={`${styles.nickName} mt-1 px-4 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
            placeholder="닉네임"
            value={nicknameInput}
            onChange={nicknameInputHandler}
          />
        </div>

        {/* ---------- Password ---------- */}
        <div className="passwordBox">
          <input
            type="password"
            className={`${styles.passwordBox} mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
            placeholder="비밀번호"
            value={passwordInput}
            onChange={passwordInputHandler}
          />
        </div>

        {/* RePassword */}
        <div className="rePasswordBox">
          <input
            type="password"
            className={`${styles.rePasswordBox} mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
            placeholder="비밀번호 확인"
            value={passwordCheckInput}
            onChange={passwordCheckInputHandler}
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
