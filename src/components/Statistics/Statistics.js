import PropTypes from 'prop-types'
import Notification from '../Notification/Notification'
import styles from './Statistics.module.css'



const Statistics = ({ good, neutral, bad, total, positivePercantage }) => {
    return (
         <>
      {total > 0 ? (
        <ul className={styles.statsList}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercantage}%</li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};

export default Statistics