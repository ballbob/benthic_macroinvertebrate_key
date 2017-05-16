import React from 'react'

class Question extends React.Component {
  render(){

    return(
      <div id="question">
        <ul>
        
        <li> 
          {this.props.question}           
          <button id="answer-button">
            {this.props.answer}
          </button>
        </li>
        
        <li>
          {this.props.otherText} 
        </li>
        <button id="next-button">
          {this.props.nextButton}
        </button>
        </ul>
      </div>
    )
  }
}

export default Question