import { Component } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';

class Feedback extends Component {
  // static propTypes = {

  // }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    // const options = Object.keys(this.state);
    const currentFeedback = evt.target.textContent;
    console.log('currentFeedback :>> ', currentFeedback);
    this.setState(prevState => {
      return { [currentFeedback]: prevState[currentFeedback] + 1 };
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    console.log('this.state.good :>> ', this.state.good);
    console.log('this.countTotalFeedback :>> ', this.countTotalFeedback());

    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePersentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback!">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePersentage}
          />
        </Section>
      </>
    );
  }
}

export default Feedback;