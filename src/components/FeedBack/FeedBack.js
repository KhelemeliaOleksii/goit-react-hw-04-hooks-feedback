import { Component } from "react";

class FeedBack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    render() {
        const entries = Object.entries(this.state);
        return (
            <div className="FeedBack">
                {entries.map(([key]) => {
                    return (
                        <button
                            key={key}
                            type="button"
                            className="button"
                            name={key}
                        >
                            {key}
                        </button>
                    )
                }
                )}
            </div>
        )
    }
};

export default FeedBack;
