import React, { Component } from "react"
import Calendar from 'react-input-calendar'
import axios from 'axios'
import '../App.css'



class TravelForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      destination : '',
      start_date : '',
      end_date : '',
      number_of_travelers_max : '',
      description : '',
       
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
      alert('Votre destination : ' + this.state.destination);
      e.preventDefault()
      const {...destination} = this.state
      console.log({destination})
      
      axios.post('http://localhost:8000/api/travels/',destination)
      .then(res => {
        alert('Tuk Tuk ajouté!');
      }).catch(event => {
      console.error(event);
      alert(`Erreur lors de l'ajout d'un Tuk Tuk`);
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
          <input id='start_date' type='date' name='start_date' value={this.state.start_date} onChange={this.handleInputChange}></input>
        
        <label htmlFor='end_date'>Date de retour: </label>
          <input type='date' id='end_date' name='end_date' date={this.state.current} value={this.state.end_date} onChange={this.handleInputChange}/>
          
          <label htmlFor='number_of_travelers_max'>Nombre de voyageurs: </label>
          <input id='number_of_travelers_max' type='text' name='number_of_travelers_max' placeholder='Nombre de voyageurs..'
          value={this.state.number_of_travelers_max} onChange={this.handleInputChange}/>

        <label htmlFor='description'>Description: </label>
          <textarea name ='description' placeholder = 'Votre message..'
          rows="5" cols="33" value={this.state.description} onChange={this.handleInputChange}></textarea>
        
        <input type='submit' value='Ajouter' className='button'/>
        
      </form>


    )
  }
}



export default TravelForm;
