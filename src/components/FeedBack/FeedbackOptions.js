import styles from './FeedbackOptions.module.css'
import PropTypes from 'prop-types'


const FeedbackOptions = ({ keys, onLeaveFeedback }) => {
    return (
        <div className={styles.Options}>
            {keys.map((item) => (
                <button
                    key={item}
                    type="button"
                    className={styles.Button}
                    name={item}
                    onClick={() => onLeaveFeedback(item)}
                >
                    {item}
                </button>
            ))}
        </div>
    )
};

FeedbackOptions.propTypes = {
    keys: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
