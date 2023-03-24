import PropTypes from 'prop-types';
import StyledButton from './FeedbackOptions.styled';

const Feedbackoptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <StyledButton type="button" onClick={onLeaveFeedback} key={option}>
        {option}
      </StyledButton>
    ))}
  </>
);

Feedbackoptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default Feedbackoptions;
