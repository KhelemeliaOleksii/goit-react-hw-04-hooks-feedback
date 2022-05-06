import { Component } from "react";

class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
        const keys = Object.keys(options);
        return (
            <div className="FeedBack">
                <div className="Options">
                    {keys.map((item) => (
                        <button
                            key={item}
                            type="button"
                            className="button"
                            name={item}
                            onClick={() => onLeaveFeedback(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        )
    }
};

export default FeedbackOptions;
