import React, { Component } from "react"
import { connect } from  'react-redux'
import { Link } from 'react-router-dom';
import back from '../img/arrow-back.png'
import Moment from 'react-moment';

class TravelDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user:[]
    }
  }
  componentDidMount() {
    fetch(`http://localhost:8000/api/users/${this.props.location.state.IDuser_creator}`,
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
        user: data[0]
    })
  })
  .catch()
  }
  
  render() {
    console.log(this.state.user)
    return (
      <div>
        <Link className='link-back-arrow' to="/travelcards">
          <figure className='fig-back-arrow'>
            <img className='back-arrow' src={back} alt='Arrow to back'/>
          </figure>
        </Link>
        <img src={this.props.location.state.cityPic} alt={this.props.location.state.cityPic}></img>
        <h1>{this.props.location.state.destination} </h1>
        <img src={this.state.user.avatar} alt='avatar'></img>
        <p>{this.state.user.firstname}</p>
        <p>{this.state.user.email}</p>
        <p><Moment format="DD/MM/YYYY">{this.props.location.state.start_date}</Moment> </p>
        <p><Moment format="DD/MM/YYYY">{this.props.location.state.end_date}</Moment> </p>
        <p>{this.props.location.state.description} </p>
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

