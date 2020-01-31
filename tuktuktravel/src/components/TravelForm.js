import React, { Component } from "react"
import { connect } from  'react-redux';
import axios from 'axios'
import UploadCityPic from "./UploadCityPic"
import NavFooter from "./NavFooter"
import logoOk from '../img/logoOk.png';
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
      cityPic: '',
      userID: '',
      isAdded: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
      e.preventDefault()
      const {...destination} = this.state
      destination.cityPic = this.props.cityPic
      destination.userID = this.props.userID
      
      axios.post('http://localhost:8000/api/travels/',destination)
      .then(res => {
        this.setState ({
          isAdded: true
        })     
      }).catch(event => {
      console.error(event)
  });
}

  render() {
    console.log(this.state)
    return(
      <div className='travel-form'>
        <div className='title-travel-form'>PROPOSER UN TUK-TUK</div>
        <div className = 'add-travel'>
          <label htmlFor='destination'>Destination: </label>
            <input className = 'input-add-travel' id='destination' type='text' name='destination' placeholder='Votre destination..'
            value={this.state.destination} onChange={this.handleInputChange}
            maxLength="20" size="20"/>
          
          <label htmlFor='start_date'>Date de départ: </label>
            <input className = 'input-add-travel' id='start_date' type='date' name='start_date' 
            value={this.state.start_date} onChange={this.handleInputChange}
            ></input>
          
          <label htmlFor='end_date'>Date de retour: </label>
            <input className = 'input-add-travel' type='date' id='end_date' name='end_date' 
            date={this.state.current} value={this.state.end_date} onChange={this.handleInputChange}/>
            
            <label htmlFor='number_of_travelers_max'>Nombre de voyageurs: </label>
            <input className = 'input-add-travel' id='number_of_travelers_max' type='text' name='number_of_travelers_max' placeholder='Voyageurs'
            value={this.state.number_of_travelers_max} onChange={this.handleInputChange}
            maxLength="6" size="6"/>

          <label htmlFor='description'>Description: </label>
            <textarea  className = 'input-add-travel' name ='description' placeholder = 'Projets, activités durant le voyage..'
            rows="5" cols="33" value={this.state.description} onChange={this.handleInputChange}></textarea>
          
          <button onClick={this.handleSubmit} className="add-tuktuk">Ajouter</button>
          {this.state.isAdded ?
              <div className='okUser'>
                <div className='logo-ok'>
                  <img src={logoOk} alt='logo Ok'/>
                </div>
                <p className="user-added">Utilisateur ajouté</p>
              </div> : null}
          
        </div>
        <UploadCityPic />
        <NavFooter/>
      </div>

    )
  }
}

function  mapStateToProps(state) {
  return {
      cityPic:  state.cityPic.cityPic,
      userID: state.auth.userID
  }
};

export  default  connect(mapStateToProps)(TravelForm)
