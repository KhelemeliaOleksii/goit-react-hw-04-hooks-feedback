import { Component } from "react";
import s from './FeedbackOptions.module.css'
import PropTypes from 'prop-types'
class FeedbackOptions extends Component {
    render() {
        const { keys, onLeaveFeedback } = this.props;
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
    keys: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
