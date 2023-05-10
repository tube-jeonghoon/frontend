import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Signup.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ---------- 인풋 박스에 들어올 데이터를 위한 useState ---------- //
  const [emailInput, setEmailInput] = useState('');
  const [nicknameInput, setNicknameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordCheckInput, setPasswordCheckInput] = useState('');

  // ---------- POST 요청 ---------- //
  const signupUser = async (user) => {
    try {
      await axios
        .post(`${process.env.REACT_APP_SERVER_URL}/api/signup`, user)
        .then((response) => {
          console.log(response.status);
        });
      alert(
        `가입이 완료되었습니다. 가입하신 이메일과 비밀번호로 로그인 하여주세요.`,
      );
      navigate('/Login');
    } catch (err) {
      console.log(err);
      alert(
        `회원가입이 실패하였습니다. 아이디가 중복됬거나 닉네임이 중복되었습니다.`,
      );
      setEmailInput('');
      setNicknameInput('');
    }
  };

  // ---------- 이메일 인풋 핸들러 ---------- //
  const emailInputHandler = (e) => {
    setEmailInput(e.target.value);
  };

  // ---------- 닉네임 인풋 핸들러 ---------- //
  const nicknameInputHandler = (e) => {
    setNicknameInput(e.target.value);
  };

  // ---------- 패스워드 인풋 핸들러 ---------- //
  const passwordInputHandler = (e) => {
    setPasswordInput(e.target.value);
  };

  // ---------- 패스워드 확인 핸들러 ---------- //
  const passwordCheckInputHandler = (e) => {
    setPasswordCheckInput(e.target.value);
  };

  // ---------- onSubmit Handler ---------- //
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (passwordInput !== passwordCheckInput) {
      return alert(`비밀번호 확인이 일치하지 않습니다.`);
    }

    const user = {
      email: emailInput,
      password: passwordInput,
      nickname: nicknameInput,
      // passwordCheck: passwordCheckInput,
    };

    signupUser(user);
  };

  const loginBtn = () => {
    navigate('/login');
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.innerBox}`}>
        {/* ---------- Title ---------- */}
        <div className={`${styles.titleBox}`}>BANG MOON</div>

        <form onSubmit={onSubmitHandler}>
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
              type="text"
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
            <button className={`${styles.signBtn}`}>가입</button>
          </div>
        </form>

        {/* ---------- loginLine ---------- */}
        <div className={`${styles.loginLine}`}>
          <span className={`${styles.loginHrL}`}></span>
          <div style={{ marginRight: '34px' }}>또는</div>
          <span className={`${styles.loginHrR}`}></span>
        </div>

        {/* ---------- loginBox ---------- */}
        <div className={`${styles.loginBox}`}>
          <div>계정이 있으신가요?</div>
          <button className={`${styles.loginBtn}`} onclick={loginBtn}>
            <Link to="../Login">로그인하기</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
