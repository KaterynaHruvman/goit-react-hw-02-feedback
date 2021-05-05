
import { Component } from 'react'
import Section from './components/Section/Section'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Section from './components/Section/Section'
import { FEEDBACK_OPTTIONS } from './components/data/constatns'
 

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bed: 0
    }
    handleFeedback = ({ target }) => {
        const { feedback } = target.dataset
        this.setStaete((prevState) => ({ [feedback]: prevState[feedback]+ 1 }))
    }
    render() {
        <div>
            <Section title="Please leave Feedback">
                <FeedbackOptions options={ FEEDBACK_OPTTIONS } />
            </Section>
        </div>
    
    }
   
}
export default App
