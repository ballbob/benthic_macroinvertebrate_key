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
        <Family family1={this.props.answer1}/>
      </div>
    )
  }
}

export default Question