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
    handlerOnClick = (key) => {
        this.setState((prevState) => { return { [key]: prevState[key] + 1 } });
        // console.log(this.state[key]);
    }
    countTotalFeedback() {
        return Object.values(this.state).reduce((total, item) => total + item, 0);
    }
    render() {
        const entries = Object.entries(this.state);
        return (
            <div className="FeedBack">
                <h2 className="Title">Please leave feedback</h2>
                <div className="Controls">
                    {entries.map(([key]) => (
                        <button
                            key={key}
                            type="button"
                            className="button"
                            name={key}
                            onClick={() => this.handlerOnClick(key)}
                        >
                            {key}
                        </button>
                    ))}
                </div>
                <div className="Statistics">
                    <h3 className="Statistic--title">Statistics</h3>
                    {entries.map(([key, value]) => (
                        <p
                            key={key}
                            className="label"
                        >
                            <span>{key} : </span>
                            <span>{value}</span>
                        </p>
                    ))}
                </div>
            </div>
        )
    }
};

export default FeedBack;
