import React from 'react'

class Question extends React.Component {
  render(){

    return(
      <div id="question">
        <ul>      
          <li id="question-text"> 
            {this.props.question}
          </li>
          
          <li id="question-other-text">
            {this.props.otherText} 
          </li>
        </ul>
      </div>
    )
  }
}

export default Question