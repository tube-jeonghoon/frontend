import axios from 'axios';
import { async } from 'q';
import { useQuery } from 'react-query';
import Cookies from 'js-cookie';

// API 요청이 들어가는 모듈
// test@test.com / test1111

// post 전체조회
const getPosts = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/posts`,
  );
  return response.data;
};

// post 추가
const addPost = async (inputValue) => {
  const token = Cookies.get('token');
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/posts`,
    inputValue,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

// post 조회
const getPostDetail = async (postId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}`,
  );
  return response.data;
};

// post 삭제
const delPost = async (postId) => {
  const token = Cookies.get('token');
  const response = axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

// post 수정
const editPost = async (inputValue) => {
  const response = await axios.put(
    `${process.env.REACT_APP_SERVER_URL}/api/posts/:${inputValue.postId}`,
    inputValue,
  );
};

export { getPosts, addPost, delPost, editPost, getPostDetail };

// 토큰값을 포함해 데이터를 요청하는 방법
// const fetchData = async () => {
//   try {
//     const token = Cookies.get('token');
//     const response = await axios.get(
//       `${process.env.REACT_APP_SERVER_URL}/api/posts`,
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       },
//     );
//     console.log(response.data);
//     console.log('token:', token);
//   } catch (error) {
//     console.error(error);
//   }
// };
