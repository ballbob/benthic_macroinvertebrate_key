import React from 'react'

class Family extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(this.props.family)
  }

  render(){
    return(
      <div id="family">
        <img src={this.props.img}/>
        <p>{this.props.family}</p>
      </div>
    )
  }
}

export default Family