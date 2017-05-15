import React from 'react'
import Family from './Family'

class Question extends React.Component {
  render(){
    return(
      <div id="question">
        <ul>
        <li>{this.props.question1} <button>{this.props.answer1}</button></li>
        <li>{this.props.question2}  <button>{this.props.answer2}</button></li>
        </ul>
        <Family family={this.props.answer1}/>
      </div>
    )
  }
}

export default Question