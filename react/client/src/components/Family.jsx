import React from 'react'

class Family extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id="family-component">
        <img src={this.props.family.answerimg}/>
        <p><b>Family:</b> {this.props.family.answer}</p>
        <p><b>Information:</b> {this.props.family.information}</p>
      </div>
    )
  }
}

export default Family