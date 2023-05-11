import axios from 'axios';
import Cookies from 'js-cookie';

// comment 전체 조회
const getComments = async (postId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}/comments`,
  );
  return response.data;
};

// comment 추가
const addComment = async (comment) => {
    const token = Cookies.get('token');
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/posts/${comment.postId}/comments`,
      comment.cmtInputValue,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    // console.log(response.data)
  };

  // comment 삭제
  const delComment = async (delInfo) => {
    const token = Cookies.get('token');
    const response = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/api/posts/${delInfo.postId}/comments/${delInfo.commentId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  };




export { getComments, addComment, delComment }