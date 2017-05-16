import React from 'react'
import ReactDOM from 'react-dom'
import Question from '../components/Question'
import Family from '../components/Family'
import Ajax from '../services/Ajax'

class QuestionContainer extends React.Component {

  constructor(props){
    super(props)
    this.setQuestion = this.setQuestion.bind(this)
    this.state = {
      question: 1
    }
  }

  setQuestion(questionNumber){
    this.setState({question:questionNumber})
  }

  render(){
    return(
      <div id="question-container">
        <p>Key</p>
        <Question question1 = "End of abdomen has long, slender breathing tube" answer1="Nepidae (water scorpion)" question2 = "Not as above" answer2="Go to 2"/>
      </div>
    )
  }
}

export default QuestionContainer