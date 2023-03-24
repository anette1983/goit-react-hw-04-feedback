import { useState } from "react";
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';

export const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
  
  
    const onLeaveFeedback = evt => {
      const currentFeedback = evt.target.textContent;
      console.log('currentFeedback :>> ', currentFeedback);
      switch (currentFeedback) {
        case 'good':
            setGood((prevGood) => prevGood + 1);
            
            break;
        case 'neutral':
            setNeutral((prevNeutral) => prevNeutral + 1);
        
            break;
        case 'bad':
            setBad((prevBad) => prevBad + 1);
        
            break;
      
        default:
           return;
      }
    //   this.setState(prevState => {
    //     return { [currentFeedback]: prevState[currentFeedback] + 1 };
    //   });
    };
  
    const countTotalFeedback = () => {
      const total = good + neutral + bad;
      return total;
    };

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        return total > 0 ? Math.round((good / total) * 100) : 0;
    };

    const options = ['good', 'neutral', 'bad'];
      
      return (
        <>
          <Section title="Please leave feedback!">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={onLeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        </>
      );
  }
  
  export default Feedback;


