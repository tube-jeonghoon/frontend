import styles from './Comments.module.css';
import {
  RiEdit2Line,
  RiDeleteBinLine,
} from 'react-icons/ri';
import { VscSaveAs } from 'react-icons/vsc';

const Comment = () => {
  return (
    <div className={`${styles.cmtContainer}`}>
      <div className={`${styles.cmtWrap}`}>
        <div className={`${styles.cmtZone}`}>
          <div className={`${styles.cmtInfo}`}>
            <div className="info">
              <span className="nickname">정훈</span>
              <span className={`${styles.cmtDate}`}>23.05.08</span>
            </div>
            <div className={`${styles.cmtBtnWrap}`}>
              <button>
                <RiEdit2Line />
              </button>
              <button className={`${styles.cmtDelBtn}`}>
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
          <div className={`${styles.comment}`}>좋아요! 멋있어요!</div>
        </div>
        <div className={`${styles.cmtZone}`}>
          <div className={`${styles.cmtInfo}`}>
            <div className="info">
              <span className="nickname">정훈</span>
              <span className={`${styles.cmtDate}`}>23.05.08</span>
            </div>
            <div className={`${styles.cmtBtnWrap}`}>
              <button>
                <RiEdit2Line />
              </button>
              <button className={`${styles.cmtDelBtn}`}>
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
          <div className={`${styles.comment}`}>
            와 멋지네요. 꼭 가고 싶습니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ
          </div>
        </div>
        <div className={`${styles.cmtZone}`}>
          <div className={`${styles.cmtInfo}`}>
            <div className="info">
              <span className="nickname">정훈</span>
              <span className={`${styles.cmtDate}`}>23.05.08</span>
            </div>
            <div className={`${styles.cmtBtnWrap}`}>
              <button>
                <RiEdit2Line />
              </button>
              <button className={`${styles.cmtDelBtn}`}>
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
          <div className={`${styles.comment}`}>
            와 멋지네요. 꼭 가고 싶습니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ
          </div>
        </div>
        <div className={`${styles.cmtZone}`}>
          <div className={`${styles.cmtInfo}`}>
            <div className="info">
              <span className="nickname">정훈</span>
              <span className={`${styles.cmtDate}`}>23.05.08</span>
            </div>
            <div className={`${styles.cmtBtnWrap}`}>
              <button>
                <RiEdit2Line />
              </button>
              <button className={`${styles.cmtDelBtn}`}>
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
          <div className={`${styles.comment}`}>
            와 멋지네요. 꼭 가고 싶습니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ
          </div>
        </div>
      </div>
      {/* 댓글 작성란 */}
      <div className={`${styles.cmtWriteWrap}`}>
        <form action="">
          <div className={`${styles.cmtWriteInfo}`}>
            <div className="info">
              <span className="nickname">정훈</span>
            </div>
            <button className={`${styles.cmtSaveBtn}`}>
              <VscSaveAs />
            </button>
          </div>
          <textarea name="" id="" cols="28" rows="5"></textarea>
        </form>
      </div>
    </div>
  );
};

export default Comment;
