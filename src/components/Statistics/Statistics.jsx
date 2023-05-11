import React from 'react';
import PropTypes from 'prop-types';
import { StatList, StatItem } from './Statistics.styled';

const Statistics = ({good, neutral, bad, total = 0, positiveFeedbackPercentage = 0}) => 
{
    return (
        <StatList>
        <StatItem>Good: {good}</StatItem>
        <StatItem>Neutral: {neutral}</StatItem>
        <StatItem>Bad: {bad}</StatItem>
        <StatItem>Total: {total}</StatItem>
        <StatItem>Positive feedback: {positiveFeedbackPercentage ? positiveFeedbackPercentage : 0}%</StatItem>
        </StatList>
    ) 
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedbackPercentage: PropTypes.number.isRequired,
}