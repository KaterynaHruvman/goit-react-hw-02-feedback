import PropTypes from 'prop-types'
import styles from './FeedbackOptions.module.css'
const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
    return (
        <button type="button" data-feedback={feedback} onClick={onLeaveFeedback}
            className={styles.btn}>
           
            { feedback}
        </button>);
};
    
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <FeedbackButton
      feedback={option}
      onLeaveFeedback={onLeaveFeedback}
      key={option}
    />
  ));
};
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
