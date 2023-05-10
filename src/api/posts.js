import axios from "axios";

// API 요청이 들어가는 모듈

// post 전체조회
const getPosts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/posts`);
    // console.log(response.data)
    return response.data;
}

// post 추가
const addPosts = async (inputValue) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/posts`, inputValue);
    console.log(response.data)
}

// post 조회
const getPostDetail = async (postId) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}`);
    console.log("-------------나왔당", response.data)
    return response.data;
}

// post 삭제
const delPosts = async (postId) => {
    const response = axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}`);
    return response.data;
}

// post 수정
const editPost = async (inputValue) => {
    const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/posts/:${inputValue.postId}`, inputValue);
}

export { getPosts, addPosts, delPosts, editPost, getPostDetail };
