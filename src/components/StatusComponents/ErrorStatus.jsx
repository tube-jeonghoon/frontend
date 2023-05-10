import styles from './status.module.css';
import { TbFaceIdError } from 'react-icons/tb';

const ErrorStatus = () => {
  return (
    <div className={`${styles.stateWrap}`}>
      <div className={`${styles.stateBox}`}>
        <TbFaceIdError className={`${styles.stateLogo}`} />
        <h2 className={`${styles.stateTitle}`}>ERROR...!</h2>
      </div>
    </div>
  );
};

export default ErrorStatus;
