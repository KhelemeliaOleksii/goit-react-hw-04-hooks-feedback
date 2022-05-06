import { Component } from 'react'
import s from './Statistics.module.css'
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

            <div className={s.Statistics}>
                {entries.map(([key, value]) => (
                    <p
                        key={key}
                    >
                        <span>{((key === "positivePercentage") ? "Positive feedback" : key)} : </span>
                        <span>{Math.round(value)}{(key === "positivePercentage") && '%'}</span>
                    </p>
                ))}
            </div>

        )
    }
};

export default Statistics;