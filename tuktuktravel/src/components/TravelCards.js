import React, { Component } from "react"
import Moment from 'react-moment';
import '../App.css'
import NavFooter from "./NavFooter";
import SearchField from './SearchField'
import { connect } from  'react-redux';
import { Link } from 'react-router-dom';

class TravelCards extends Component {
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
    return (
      <div className='travel-cards'>
        <SearchField />
        <div className='title-travel-cards'>Tuk-tuk proposés</div>
        {this.state.travels.map(res =>{
          console.log(res)
          return <div key={res.travelID} className='liste-travel' >
              <figure className='fig-img-travel-cards'>
              <Link  to={{pathname:"/traveldetails",
                state: {cityPic: res.cityPic, travelID: res.travelID, destination:res.destination, userID_creator:res.userID_creator }}}><img className='img-travel-cards' alt={res.cityPic} src={res.cityPic}></img></Link>
              </figure>
              <div className='liste-description-travel-cards'>
                <span>{res.destination}</span><br/>
                <Moment format="DD/MM/YYYY">{res.start_date}</Moment>
                <Moment format="DD/MM/YYYY">{res.end_date}</Moment>
              </div>
            
              </div>})}
              <NavFooter/>
      </div>
    )
  }
}

function  mapStateToProps(state) {
  return {
      token:  state.auth.token,
  }
}
export default connect(mapStateToProps)(TravelCards)
