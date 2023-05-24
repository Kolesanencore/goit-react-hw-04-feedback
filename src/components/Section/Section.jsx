import PropTypes from 'prop-types';
import { Title, TitleContainer } from './Section.styled';
export const Section = ({ title, children }) => (
  <div>
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
