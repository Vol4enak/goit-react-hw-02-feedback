import React from 'react';
import { BtnFeed } from './feedbackOptions.styled';
const FeedbackOptions = ({
  options,
  onLeaveFeedback,
  onTotalCount,
  onTotalPercentage,
}) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      <ul>
        <li>
          {options.map(index => (
            <BtnFeed
              item={index}
              key={index}
              type="button"
              onClick={() => {
                onLeaveFeedback(index);
                onTotalCount();
                onTotalPercentage();
              }}
            >
              {index}
            </BtnFeed>
          ))}
        </li>
      </ul>
    </>
  );
};

export default FeedbackOptions;
