import { PacmanLoader } from 'react-spinners';
import styles from './status.module.css';

const LoadingStatus = () => {
  return (
    <div className={`${styles.stateWrap}`}>
      <div className={`${styles.stateBox}`}>
        <h2 className={`${styles.stateTitle}`}>Loading...!</h2>
        <PacmanLoader className={`${styles.stateLoading}`} color="#005774" />
      </div>
    </div>
  );
};

export default LoadingStatus;
