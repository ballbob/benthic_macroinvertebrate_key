import React from 'react'

class Question extends React.Component {
  render(){
    return(
      <div id="question">
        <ul>
        <li>{this.props.question1} <button>{this.props.answer1}</button></li>
        <li>{this.props.question2}  <button>{this.props.answer2}</button></li>
        </ul>
      </div>
    )
  }
}

export default Question