import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import {
  Card,
  ButtonContainer,
} from './FeedbackOptions/FeedbackOptions.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? ((this.state.good / total) * 100).toFixed() : 0;
  };

  render() {
    return (
      <Card>
        <h1>Expresso</h1>
        <Section title="Please leave your feedback">
          <ButtonContainer>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleFeedback}
            />
          </ButtonContainer>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback yet" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Card>
    );
  }
}

export default App;
