import { Component } from "react";
import s from './FeedbackOptions.module.css'
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

export default FeedbackOptions;
