import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

  const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext);
  const { resetCountDown } = useContext(CountdownContext);

  function handleChallendSucceeded() {
    completedChallenge();
    resetCountDown();
  }
  function handleChallendFailed() {
    resetChallenge();
    resetCountDown();

  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} </header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallendFailed}
            >Falhei</button>


            <button type="button"
              onClick={handleChallendSucceeded}
              className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeBoxContainer}>
            <strong>Finalize um clico para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level up" />
          Avance de level completando desafios.
        </p>
          </div>
        )}
    </div >
  )
}