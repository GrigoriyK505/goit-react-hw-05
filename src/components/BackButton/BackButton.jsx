import styles from './BackButton.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => navigate(location.state?.prevLocation || '/')}
      >
        Go back
      </button>
    </div>
  );
}

export default BackButton;
