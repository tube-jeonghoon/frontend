import axios from 'axios';

// comment 전체 조회
const getComments = async (postId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}/comments`,
  );
  return response.data;
};

export { getComments }