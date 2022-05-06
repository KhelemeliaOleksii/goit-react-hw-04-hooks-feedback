import { Component } from 'react'

class Statistics extends Component {
    static defaulProps = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0,
    }

    render() {
        // const { good, neutral, bad, total, positivePercentage } = this.props;
        const entries = Object.entries(this.props);
        return (

            <div className="Statistics">
                <div className="GeneralStatistic">
                    {entries.map(([key, value]) => (
                        <p
                            key={key}
                            className="label"
                        >
                            <span>{key} : </span>
                            <span>{value}{(key === "positivePercentage") && '%'}</span>
                        </p>
                    ))}
                </div>
            </div>

        )
    }
};

export default Statistics;