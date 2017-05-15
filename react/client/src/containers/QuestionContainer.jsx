import React from 'react'
import ReactDOM from 'react-dom'
import Question from '../components/Question'

class QuestionContainer extends React.Component {

  render(){
    return(
      <div id="question-container">
        <p>Key</p>
        <Question question1 = "End of abdomen has long, slender breathing tube" question2 = "Not as above"/>
      </div>
    )
  }
}

export default QuestionContainer