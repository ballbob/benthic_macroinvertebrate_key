import React from 'react'

class Question extends React.Component {
  render(){

    return(
      <div id="question">
        <ul>      
          <li id="question-text"> 
            {this.props.question}
          <button id="answer-button">
            {this.props.answer}
          </button>
          </li>

          <li id="other-text">
            {this.props.otherText}
            <button id="next-button" onClick={this.props.nextButtonClick}>
              Next
            </button>
          </li>

        </ul>
      </div>
    )
  }
}

export default Question