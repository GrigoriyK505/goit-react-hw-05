import styles from './BackButton.module.css';
import { useNavigate } from 'react-router-dom';

function BackButton({ backPath }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => navigate(backPath)}>
        ⬅ Go back
      </button>
    </div>
  );
}

export default BackButton;
