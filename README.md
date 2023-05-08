# 관광명소 소개

관광명소를 선정하여 소개하는 홈페이지 입니다. 프론트엔드페이지 입니다..

## 스택

```txt
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.11.1",

"redux": "^4.2.1",
"react-redux": "^8.0.5",
"@reduxjs/toolkit": "^1.9.5",

"axios": "^1.4.0",
"react-query": "^3.39.3",
```

## 구조

```txt
📦src
 ┣ 📂assets
 ┃ ┣ 📂image
 ┃ ┗ 📜Layout.css
 ┣ 📂components
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┃ ┗ 📜Footer.module.css
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┗ 📜Header.module.css
 ┃ ┃ ┣ 📂Nav
 ┃ ┃ ┃ ┣ 📜Nav.jsx
 ┃ ┃ ┃ ┗ 📜Nav.module.css
 ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┗ 📜Layout.module.css
 ┃ ┗ 📂Loginbar
 ┃ ┃ ┣ 📜LoginBar.jsx
 ┃ ┃ ┗ 📜LoginBar.module.css
 ┣ 📂pages
 ┃ ┣ 📂Contents
 ┃ ┃ ┣ 📜Contents.jsx
 ┃ ┃ ┗ 📜Contents.module.css
 ┃ ┣ 📂Details
 ┃ ┃ ┣ 📜Details.jsx
 ┃ ┃ ┗ 📜Details.module.css
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┗ 📜Login.module.css
 ┃ ┣ 📂Posts
 ┃ ┃ ┣ 📜Posts.jsx
 ┃ ┃ ┗ 📜Posts.module.css
 ┃ ┗ 📂Signup
 ┃ ┃ ┣ 📜Signup.jsx
 ┃ ┃ ┗ 📜Signup.module.css
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂modules
 ┣ 📂shared
 ┃ ┗ 📜Router.js
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜tailwind.css
```
