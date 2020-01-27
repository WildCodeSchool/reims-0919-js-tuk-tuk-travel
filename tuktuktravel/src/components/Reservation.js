import React, { Component } from "react"
import axios from 'axios'



class Reservation extends Component {
constructor(props) {
  super(props) 
  this.onReservation=this.onReservation.bind(this)
  this.state = {
    isBooked: false
  }
}

onReservation(e) {
  e.preventDefault()
      const reservation  = {
        id_user: this.props.userID, 
        id_travel: this.props.travelID
      }
      console.log({reservation})
      
      axios.post('http://localhost:8000/api/travel_user',reservation)
      .then(res => {
        //alert('TukTuk reservé');
        this.setState ({
          isBooked: true
        })
      }).catch(event => {
      console.error(event);
      //alert(`Erreur lors de la réservation du TukTuk`);
  });
}

render() {
  return (
    <div className='reserve-button'>
      <button onClick={this.onReservation}>Réserver</button>
      {this.state.isBooked?<div >tuk-tuk booké</div>:null}
    </div>
   
  )
}

}

export default Reservation  