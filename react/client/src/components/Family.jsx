import React from 'react'

class Family extends React.Component {

  constructor(props){
    super(props)
    this.img = "./img/" + this.props.family + ".png"
  }

  render(){
    return(
      <div id="family">
        <img src={this.img}/>
        <p>{this.props.family}</p>
      </div>
    )
  }
}

export default Family