import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
import { CgSmile, CgSmileNone, CgSmileSad } from 'react-icons/cg';

const icons = {
  bad: <CgSmileSad />,
  good: <CgSmile />,
  neutral: <CgSmileNone />,
};

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <Button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
      {option.charAt(0).toUpperCase() + option.slice(1)}
      {icons[option]}
    </Button>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
