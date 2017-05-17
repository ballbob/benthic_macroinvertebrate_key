import React from 'react'

class Family extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id="family">
        <img src={this.props.img}/>
        <p><b>Family:</b> {this.props.family}</p>
        <p><b>Information:</b> {this.props.info}</p>
      </div>
    )
  }
}

export default Family