import { Component } from "react";
import s from './FeedbackOptions.module.css'
import PropTypes from 'prop-types'
class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
        const keys = Object.keys(options);
        return (
            <div className={s.Options}>
                {keys.map((item) => (
                    <button
                        key={item}
                        type="button"
                        className={s.Button}
                        name={item}
                        onClick={() => onLeaveFeedback(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        )
    }
};

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
