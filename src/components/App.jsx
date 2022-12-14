
import React from "react";
import Statistics from './Statistics/Statistics'
import { Section } from "./Section/Section";
import Notification from './Notification/Notification'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
export class App extends React.Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  onButtonClick = event => {
    const clickTarget = event.target.textContent;
    this.setState(prevState => {
      return {
        [clickTarget]: prevState[clickTarget] + 1,
      };
    });
  };
  // handleGood = () => {
  //   this.setState((prevState) => ({
  //     good: prevState.good + 1,
  //   }));
  // };
  // handleBad = () => {
  //   this.setState((prevState) => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };
  // handleNeutral = () => {
  //   this.setState((prevState) => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  countTotalFeedback() {
    let total = 0;
    for (const key in this.state) {
      total = total + this.state[key];
    }
    return total;
  }

  countPositiveFeedbackPercentage() {
    let total = 0;
    for (const key in this.state) {
      total = total + this.state[key];
    }
    let percentage = Math.round((this.state.good / total) * 100);
    return percentage;
  }
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onButtonClick}
          />
        </Section>
        
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (<Notification message="There is no feedback" />) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
          
        </Section>

        
      </div>
    )
            
        
  }
}
