import React, { useEffect } from 'react';
import styles from './Details.module.css';
import exam01 from '../../assets/image/exam01.jpg';
import exam02 from '../../assets/image/exam02.jpg';
import {
  RiEdit2Line,
  RiDeleteBinLine,
  RiHeart3Fill,
  RiHeart3Line,
} from 'react-icons/ri';
import { BiCommentDetail } from 'react-icons/bi';
import { VscSaveAs } from 'react-icons/vsc';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { delPost, getPostDetail } from '../../api/posts';
import { PacmanLoader } from 'react-spinners';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Comment from '../../components/Comments/Comments';
import LoadingStatus from '../../components/StatusComponents/LoadingStatus';
import ErrorStatus from '../../components/StatusComponents/ErrorStatus';
import { async } from 'q';

const Details = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // postId 받아오기
  const { postId } = useParams();

  // post 조회
  const { isLoading, isError, data } = useQuery(`post${postId}`, () =>
    getPostDetail(postId),
  );

  // useEffect(()=> {
  //   if(data){
  //     console.log("여기 들어와야되는데?!?!?!?", data)
  //   }
  // }, [data])

  // post 삭제
  const clickDelBtnHandler = () => {
    if (window.confirm('삭제 하시겠습니까?')) {
      mutation.mutate(postId);
    }
    return '';
  };

  const mutation = useMutation(delPost, {
    onSuccess: () => {
      alert('삭제되었습니다.');
      queryClient.invalidateQueries('post');
      navigate('/');
    },
  });

  // 조회 상태 처리
  if (isLoading) {
    return <LoadingStatus />;
  }
  
  if (isError) {
    return <ErrorStatus />;
  }

  // 사진 이미지 동적으로 변경하기
  // isLoading 보다 위에 있으면 안됨!! (데이터가 아직 안불러와진 상태라 undefined 됨)
  const bgImg = {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${data.data.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <>
      {
        data && (
          <div className={`${styles.container}`}>
            {/* ---------- contentsL ---------- */}
            <div className={`${styles.contentsL}`}>
              <div className={`${styles.btnWrap}`}>
                <button>
                  <RiEdit2Line />
                </button>
                <button onClick={clickDelBtnHandler}>
                  <RiDeleteBinLine />
                </button>
              </div>
              <div className={`${styles.contentBox}`}>
                {/* ---------- contentsTitleBox ---------- */}
                <div className={`${styles.contentsTitleBox}`}>
                  <div className={`${styles.contentsY}`}></div>
                  <div className={`${styles.contentsTitle}`}>
                    {data.data.title}
                  </div>
                  <button className={`${styles.contentsHeart}`}>
                    <RiHeart3Line />
                  </button>
                  {/* <button className={`${styles.contentsHeart}`}><RiHeart3Fill /></button> */}
                </div>
                {/* ---------- contentsLocal ---------- */}
                <div className={`${styles.contentsLocal}`}>
                  <p>{data.data.location}</p>
                </div>
                {/* ---------- contentsBody ---------- */}
                <div className={`${styles.contentsBody}`}>
                  {data.data.content}
                </div>
              </div>
            </div>
            {/* ---------- contentsR ---------- */}
            <div className={`${styles.contentsR}`}>
              <div className={`${styles.contentsImg}`} style={bgImg}>
                {/* <img
                  className={`${styles.contentsImgImg}`}
                  src=''
                  alt="#"
                /> */}
              </div>
              {/* -----------comment------------- */}
              <Comment />
            </div>
          </div>
        ) // ---------- container ----------
      }
    </>
  );
};

export default Details;
