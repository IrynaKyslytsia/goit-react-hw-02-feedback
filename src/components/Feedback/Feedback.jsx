import React, { Component } from 'react';
import { FeedbackOptions, Statistics, SectionTitle, FeedbackButtons, Button, FeedbackOutput, FeedbackItem } from './Feedback.styled';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

    incrementPositiveFeedback = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            }
        });
    };

    incrementNeutralFeedback = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            }
        });
    };

    incrementNegativeFeedback = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            }
        });
    };

    render() {
        return (
            <>
                <FeedbackOptions>
                    <SectionTitle className='feedback__title'>Please leave feedback</SectionTitle>
                    <FeedbackButtons>
                        <Button type="button" onClick={this.incrementPositiveFeedback} data-state="good">Good</Button>
                        <Button type="button" onClick={this.incrementNeutralFeedback}>Neutral</Button>
                        <Button type="button" onClick={this.incrementNegativeFeedback}>Bad</Button>
                    </FeedbackButtons>
                </FeedbackOptions>
                <Statistics>
                    <SectionTitle className='feedback__title'>Statistics</SectionTitle>
                    <FeedbackOutput>
                        <FeedbackItem>Good: {this.state.good}</FeedbackItem>
                        <FeedbackItem>Neutral: {this.state.neutral}</FeedbackItem>
                        <FeedbackItem>Bad: {this.state.bad}</FeedbackItem>
                    </FeedbackOutput>
                </Statistics>
            </>
        )
    }
}


export default Feedback;