import React, { Component } from "react"
import { connect } from  'react-redux'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import NavFooter from "./NavFooter"



class MyTravels extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       travel_user: []
    }
  }
  
  componentDidMount() {
    fetch(`http://localhost:8000/api/travel_user/${this.props.userID}`,
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
        travel_user: data
        
    })
  })
  .catch()
  }


  render() {
    console.log(this.state.travel_user)
    return (
      <div className='travel-cards'>
      <div className='title-travel-cards'>Tuk-tuk proposés</div>
        {this.state.travel_user.map(res =>{
          console.log(res)
          return <div key={res.travelID} className='liste-travel' >
              <Link  to={{pathname:"/traveldetails",
                state: {cityPic: res.cityPic,
                  travelID: res.travelID,
                  destination:res.destination,
                  IDuser_creator:res.IDuser_creator,
                  start_date:res.start_date,
                  end_date:res.end_date,
                  description:res.description
                }
              }}>
              <figure className='fig-img-travel-cards'>
                <img className='img-travel-cards' alt={res.cityPic} src={res.cityPic}></img>
              </figure>
              <div className='liste-description-travel-cards'>
                <span>{res.destination}</span><br/>
                <Moment format="DD/MM/YYYY">{res.start_date}</Moment>
                <Moment format="DD/MM/YYYY">{res.end_date}</Moment>
              </div>
              </Link>
              </div>})}
              <NavFooter/>
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
export default connect(mapStateToProps)(MyTravels)
