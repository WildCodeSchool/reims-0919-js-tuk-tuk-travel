import React, { Component } from "react"
import { connect } from  'react-redux'

class TravelDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      travels:[]
    }
  }
  componentDidMount() {
    fetch('http://localhost:8000/api/travels',
    {
      method:'GET',
      headers:{
        'Authorization':  'Bearer '  +  this.props.token,
        'Content-Type':  'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        this.props.history.push('/userconnexion')
      }
      return res.json()
    })
    .then(data => {
      this.setState({
        travels: data
    })
  })
  .catch()
  }



  render() {
    console.log(this.state.travels)
    return (
      <div>
        <img src={this.props.location.state.cityPic} alt={this.props.location.state.cityPic}></img>
      </div>

    )
  }
}

function  mapStateToProps(state) {
  return {
      token:  state.auth.token,
  }
}
export default connect(mapStateToProps)(TravelDetails)

