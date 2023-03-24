import PropTypes from 'prop-types';

import Notification from 'components/Notification';
import StyledText from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {good || neutral || bad ? (
        <div>
          <StyledText>
            Good: <span>{good}</span>
          </StyledText>
          <StyledText>
            Neutral: <span>{neutral}</span>
          </StyledText>
          <StyledText>
            Bad: <span>{bad}</span>
          </StyledText>
          <StyledText>
            Total: <span>{total}</span>
          </StyledText>
          <StyledText>
            Positive feedback: <span>{positivePercentage}</span>%
          </StyledText>
        </div>
      ) : (
        // <Notification message="There is no feedback"></Notification>
        <div>
          <Notification message="There is no feedback" />
        </div>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
