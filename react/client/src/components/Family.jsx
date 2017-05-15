import React from 'react'

class Family extends React.Component {

  render(){
    return(
      <div id="family">
        <p>{this.props.family}</p>
        <img src="nepidae.png"/>
      </div>
    )
  }
}

export default Family