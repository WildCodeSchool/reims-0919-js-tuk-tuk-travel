import React, { Component } from "react"
import { connect } from  'react-redux'
import { Link } from 'react-router-dom';
import back from '../img/arrowb.png'
import Moment from 'react-moment';
import Reservation from './Reservation'
import NavFooter from './NavFooter'


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

      <div className='travel-details'>
        <div className='img-travel-details'>
          <figure className='container-city-picture'>
            <img className='city-picture' src={this.props.location.state.cityPic} alt={this.props.location.state.cityPic}/>
          </figure>
        </div>

        <p className='title-travel-details'>{this.props.location.state.destination} </p>
        <div className='travel-creator'>
          <img src={this.state.user.avatar} alt='Avatar'></img>
          <p className='firstname-traveldetails'>{this.state.user.firstname}</p>
        </div>
        <div className='link-back-arrow-details'>
          <Link to="/travelcards">
            <img className='back-arrow' src={back} alt='Arrow to back'/>
          </Link>
        </div>
        <p className='date-traveldetails'><Moment format="DD/MM/YYYY">{this.props.location.state.start_date}</Moment> - </p>
        <p className='date-traveldetails'><Moment format="DD/MM/YYYY">{this.props.location.state.end_date}</Moment> </p>
        <p className='descr-traveldetails'>{this.props.location.state.description} </p> 
        <div className='reserve'>
          <Reservation userID={this.props.userID} travelID={this.props.location.state.travelID} />
          <p>Contacter {this.state.user.firstname} : {this.state.user.email}</p>
        </div>
        <NavFooter />
      </div>
    )
  }
}

function  mapStateToProps(state) {
  return {
      token:  state.auth.token,
      userID: state.auth.userID
  }
}
export default connect(mapStateToProps)(TravelDetails)

