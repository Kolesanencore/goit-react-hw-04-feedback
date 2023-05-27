import PropTypes from 'prop-types';
import { useState } from 'react';

import { Button } from './FeedbackOptions.styled';

import { CgSmile, CgSmileNone, CgSmileSad } from 'react-icons/cg';

const icons = {
  bad: <CgSmileSad />,
  good: <CgSmile />,
  neutral: <CgSmileNone />,
};

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleFeedback = option => {
    setSelectedOption(option);
    onLeaveFeedback(option);
  };

  return (
    <>
      {options.map(option => (
        <Button
          style={{ gap: '10px' }}
          key={option}
          type="button"
          onClick={() => handleFeedback(option)}
          selected={selectedOption === option}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
          {icons[option]}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
