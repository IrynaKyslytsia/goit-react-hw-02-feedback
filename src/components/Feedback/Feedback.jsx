import React, { Component } from 'react';

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
            <div className='feedback'>
                <div className='feedback__controls'>
                    <h2 className='feedback__title'>Please leave feedback</h2>
                    <div className='feedback__buttons'>
                        <button type="button" onClick={this.incrementPositiveFeedback} data-state="good">Good</button>
                        <button type="button" onClick={this.incrementNeutralFeedback}>Neutral</button>
                        <button type="button" onClick={this.incrementNegativeFeedback}>Bad</button>
                    </div>
                </div>
                <div className='feedback__statistic'>
                    <h2 className='feedback__title'>Statistics</h2>
                    <div className='feedback__output'>
                        <span>Good: {this.state.good}</span>
                        <span>Neutral: {this.state.neutral}</span>
                        <span>Bad: {this.state.bad}</span>
                    </div>
                </div>
            </div>
        )
    }
}


export default Feedback;