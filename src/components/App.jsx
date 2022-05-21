import { useState } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedBack";
import Statistics from "./Statistics";
import Notification from "./Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerOnClick = (key) => {
    switch (key) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        console.warn("Something wrong");
    }
  }

  const countTotalFeedback = () => {
    return good + bad + neutral;
  }
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total <= 0) {
      return 0;
    }
    return good / total * 100;
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions keys={["good", "neutral", "bad"]} onLeaveFeedback={handlerOnClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />
          :
          <Notification message="There is no feedback" />
        }
      </Section>
    </>
  )

}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }
//   handlerOnClick = (key) => {
//     this.setState((prevState) => ({ [key]: prevState[key] + 1 }));

//   }
//   countTotalFeedback() {
//     return Object.values(this.state).reduce((total, item) => total + item, 0);
//   }
//   countPositiveFeedbackPercentage() {
//     const total = this.countTotalFeedback();
//     if (total <= 0) {
//       return 0;
//     }
//     return this.state.good / total * 100;
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const keysState = Object.keys(this.state);

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions keys={keysState} onLeaveFeedback={this.handlerOnClick} />
//         </Section>
//         <Section title="Statistics">
//           {total ?
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()} />
//             :
//             <Notification message="There is no feedback" />
//           }
//         </Section>
//       </>
//     )
//   }
// }
