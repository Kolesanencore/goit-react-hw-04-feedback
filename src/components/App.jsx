import React, { useState } from 'react';
// import { Section } from './Section/Section';
// import { Statistics } from './Statistics/Statistics';
// import { Notification } from './Notification/Notification';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import {
  Section,
  Statistics,
  Notification,
  FeedbackOptions,
} from 'components/index';

import {
  Card,
  ButtonContainer,
} from './FeedbackOptions/FeedbackOptions.styled';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = type => {
    setFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? ((feedback.good / total) * 100).toFixed() : 0;
  };

  return (
    <Card>
      <h1>Expresso</h1>
      <Section title="Please leave your feedback">
        <ButtonContainer>
          <FeedbackOptions
            options={Object.keys(feedback)}
            onLeaveFeedback={handleFeedback}
          />
        </ButtonContainer>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback yet" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Card>
  );
};

export default App;
