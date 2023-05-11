import { useEffect, useState } from 'react';
import styles from './Comments.module.css';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';
import { VscSaveAs } from 'react-icons/vsc';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';
import { addComment, getComments } from '../../api/comments';
import LoadingStatus from '../StatusComponents/LoadingStatus';
import ErrorStatus from '../StatusComponents/ErrorStatus';
import { delComment } from '../../api/comments';

const Comments = ({ postId }) => {
  const [nickname, setNickname] = useState('');
  const [cmtInputValue, setCmtInputValue] = useState({ comment: '' });

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // 닉네임 가져오기
  const fetchNickname = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/posts/nickname`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setNickname(response.data.nickname);
    } catch (error) {
      console.error(error);
    }
  };

  // 로딩 전에 가져오기
  useEffect(() => {
    fetchNickname();
  }, []);

  // 댓글 조회
  const { isLoading, isError, data } = useQuery('comment', () =>
    getComments(postId),
  );

  // 댓글 추가
  const mutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comment');
      return navigate(`/details/${postId}`);
    },
  });

  // 저장 클릭 시 props로 넘길 값
  const comment = {
    cmtInputValue,
    postId,
  };

  // 저장 버튼 클릭 핸들러
  const submitAddCmtBtnHandler = async (e) => {
    e.preventDefault();
    if (cmtInputValue.comment === '') {
      alert('내용을 입력하세요.');
      return null;
    }
    if (cmtInputValue) {
      mutation.mutate(comment);
    }
  };

  // 댓글 삭제
  const clickCmtDelBtnHandler = (commentId) => {
    if (window.confirm('삭제 하시겠습니까?')) {
      const delInfo = {
        postId,
        commentId,
      }
      mutation2.mutate(delInfo);
    }
    return '';
  };

  const mutation2 = useMutation(delComment, {
    onSuccess: () => {
      alert('삭제되었습니다.');
      queryClient.invalidateQueries('comment');
      navigate(`/details/${postId}`);
    },
  });

  if (isLoading) {
    return <LoadingStatus />;
  }

  if (isError) {
    return <ErrorStatus />;
  }

  return (
    <>
      {data ? (
        <div className={`${styles.cmtContainer}`}>
          <div className={`${styles.cmtWrap}`}>
            {data.result.map((comment) => {
              const d = comment.createdAt;
              const date = d.slice(2, 10);
              return (
                <div className={`${styles.cmtZone}`} key={comment.commentId}>
                  <div className={`${styles.cmtInfo}`}>
                    <div className="info">
                      <span className="nickname">{comment.nickname}</span>
                      <span className={`${styles.cmtDate}`}>{date}</span>
                    </div>
                    <div className={`${styles.cmtBtnWrap}`}>
                      <button>
                        <RiEdit2Line />
                      </button>
                      <button className={`${styles.cmtDelBtn}`} onClick={() => clickCmtDelBtnHandler(comment.commentId)}>
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  </div>
                  <div className={`${styles.comment}`}>{comment.comment}</div>
                </div>
              );
            })}
          </div>
          {/* 댓글 작성란 */}
          <div className={`${styles.cmtWriteWrap}`}>
            <form action="">
              <div className={`${styles.cmtWriteInfo}`}>
                <div className="info">
                  <span className="nickname">{nickname}</span>
                </div>
                <button
                  className={`${styles.cmtSaveBtn}`}
                  onClick={submitAddCmtBtnHandler}
                >
                  <VscSaveAs />
                </button>
              </div>
              <textarea
                name=""
                id=""
                cols="28"
                rows="5"
                placeholder="내용을 입력하세요."
                onChange={(e) => {
                  setCmtInputValue({
                    ...cmtInputValue,
                    comment: e.target.value,
                  });
                }}
              />
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Comments;
