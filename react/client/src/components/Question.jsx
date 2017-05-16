import React from 'react'
import Family from './Family'

class Question extends React.Component {
  render(){

    return(
      <div id="question">
        <ul>
        <li>{this.props.question} <button>{this.props.answer}</button></li>
        <li>{this.props.otherText}  <button>{this.props.nextButton}</button></li>
        </ul>
      </div>
    )
  }
}

export default Question