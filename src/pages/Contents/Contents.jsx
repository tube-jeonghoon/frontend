import React from 'react';
import styles from './Contents.module.css';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPosts } from '../../api/posts';
import LoadingStatus from '../../components/StatusComponents/LoadingStatus';
import ErrorStatus from '../../components/StatusComponents/ErrorStatus';

const Contents = () => {
  const { isLoading, isError, data } = useQuery('posts', getPosts);

  if (isLoading) {
    return (
      <LoadingStatus />
    );
  }
  if (isError) {
    return (
      <ErrorStatus />
    );
  }

  return (
    <>
      {data.data ? (
        <div className={`${styles.container}`}>
          <div className={`${styles.wrap}`}>
            {data.data.map((post) => {
              return (
                <Link to={`/details/${post.postId}`} key={post.postId}>
                  <div className={`${styles.cardWrap}`}>
                    <div className={`${styles.photoWrap}`}>
                      <img
                        className={`${styles.photo}`}
                        src={post.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className={`${styles.contentsWrap}`}>
                      <div className={`${styles.likes} text-lg font-bold`}>
                        <span>❤ {post.likes}</span>
                      </div>
                      <div className={`${styles.title} text-2xl font-bold`}>
                        {post.title}
                      </div>
                      <div className={`${styles.contents}`}>{post.subject}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Contents;
