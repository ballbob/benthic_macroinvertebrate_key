import React from 'react'
import ReactDOM from 'react-dom'
import Question from '../components/Question'

class QuestionContainer extends React.Component {

  render(){
    return(
      <div id="question-container">
        <p>Question container.</p>
        <Question />
      </div>
    )
  }
}

export default QuestionContainer