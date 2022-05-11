import { Component } from 'react'
import s from './Statistics.module.css'
import PropTypes from 'prop-types'

class Statistics extends Component {
    static defaulProps = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0,
    }

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <div className={s.Statistics}>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {Math.round(positivePercentage)} %</p>
            </div>

        )
        // const entries = Object.entries(this.props);
        // return (
        //     <div className={s.Statistics}>
        //         {entries.map(([key, value]) => (
        //             <p
        //                 key={key}
        //             >
        //                 <span>{((key === "positivePercentage") ? "Positive feedback" : key)} : </span>
        //                 <span>{Math.round(value)}{(key === "positivePercentage") && '%'}</span>
        //             </p>
        //         ))}
        //     </div>
        // )
    }
};
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;
