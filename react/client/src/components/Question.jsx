import React from 'react'

class Question extends React.Component {
  render(){
    return(
      <div id="question">
        <ul>
        <li>{this.props.question1}</li>
        <li>{this.props.question2}</li>
        </ul>
      </div>
    )
  }
}

export default Question