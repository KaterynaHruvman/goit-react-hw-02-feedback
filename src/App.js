
import { Component } from 'react'
import FeedbackOptions from '../src/components/Feedbackoptions/FeedbackOptions';
import Section from '../src/components/Section.js/Section';
import Statistics from './components/Statistics/Statistics.js';
import { FEEDBACK_OPTTIONS } from './components/data/constatns';

import './styles.css'



class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    handleFeedback = ({ target }) => {
        const { feedback } = target.dataset;
        this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }))
    };
    countTotalFeeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }
    countPositivePercantage = () => {
        const { good } = this.state;
        const total = this.countTotalFeeedback();
        return total ? Math.round((good / total) * 100) : 0;
    };
    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeeedback();
        const positivePercantage = this.countPositivePercantage();
        return (
            <div className="Feedback">
                <Section title="Please leave Feedback">
                    <FeedbackOptions options={FEEDBACK_OPTTIONS} onLeaveFeedback={this.handleFeedback} />
                </Section>
                <Section title='Statistics'>
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercantage={positivePercantage}
                    />
                </Section>
            </div>
        );

    }
}

export default App;
