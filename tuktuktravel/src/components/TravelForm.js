import React, { Component } from "react"
import Calendar from 'react-input-calendar'
import axios from 'axios'
// import Moment from 'moment'
// import { extendMoment } from 'moment-range'
import '../App.css'



class TravelForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      destination : '',
      start_date : '',
      end_date : '',
      description : '',
      
      
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(event) {
      alert('Votre destination : ' + this.state.destination);
      event.preventDefault()
      
      
  
      const {destination} = this.state
      console.log({destination})
      
      axios.post('http://localhost:8000/api/travels/',{ destination})
      
      .then(res => {
      
        console.log(res, 'Signature added!');
    
        
  }).catch(event => {
    console.error(event);
    alert(`Erreur lors de l'ajout d'un employé`);
  });
}

    
  
  



  

  render() {
    console.log(this.state)
    return(
      <form className = 'add-travel' onSubmit={this.handleSubmit}>
        <label htmlFor='destination'>Destination: </label>
          <input id='destination' type='text' name='destination' placeholder='Votre destination..'
          value={this.state.destination} onChange={this.handleInputChange}/>
        
        <label htmlFor='start_date'>Date de départ: </label>
          <input id='start_date' type='date 'name='start_date'></input>
        
        <label htmlFor='end_date'>Date de retour: </label>
          <Calendar format='DD/MM/YYYY' date={this.state.current} />
        
        <label htmlFor='description'>Description: </label>
          <textarea name ='description' placeholder = 'Votre message..'
          rows="5" cols="33" value={this.state.description} onChange={this.handleInputChange}></textarea>
        
        <input type='submit' value='Ajouter' className='button'/>
        
      </form>


    )
  }
}



export default TravelForm;
