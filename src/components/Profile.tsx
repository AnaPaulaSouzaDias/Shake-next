import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/68869041?s=460&u=3f75349d52ab7f20500904f8e3f3bce3a075301d&v=4" alt="Ana Paula" />
      <div>
        <strong>Ana Paula Souza Dias</strong>
        <p>
          <img src="icons\level.svg" alt="Level" />
         Level {level}</p>
      </div>
    </div>
  );
}