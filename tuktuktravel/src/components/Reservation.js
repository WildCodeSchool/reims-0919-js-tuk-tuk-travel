import React, { Component } from "react"
import axios from 'axios'



class Reservation extends Component {
constructor(props) {
  super(props) 
  this.onReservation=this.onReservation.bind(this)
}

onReservation(e) {
  e.preventDefault()
      const reservation  = {
        userID: this.props.userID, 
        travelID: this.props.travelID
      }
      console.log({reservation})
      
      axios.post('http://localhost:8000/api/travel_user',reservation)
      .then(res => {
        alert('TukTuk reservé');
      }).catch(event => {
      console.error(event);
      alert(`Erreur lors de la réservation du TukTuk`);
  });
}

render() {
  return (
    <div>
      <button onClick={this.onReservation}>Réserver</button>
    </div>
  )
}

}

export default Reservation  