import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UploadFile from './UploadFile'
import CountryList from './CountryList';
import NavFooter from './NavFooter';
import logoModify from '../img/modify-icon.png';
import '../App.css'



class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastname: '',
      firstname: '',
      password: '',
      birthday: '',
      country: '',
      city: '',
      email: '',
      phone_number: '',
      description: ''
    };
  }

  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submit = e => {
    e.preventDefault();
    const {...user} = this.state
    axios.get('http://localhost:8000/api/users',user)
    .then(res =>{
      alert(`Utilisateur ${this.state.firstname} ${this.state.lastname} modifié`)
    }).catch(event => {
      console.error(event);
      alert('User not added')
    })
  }



  render(){
    return(
      <div className='form-users'>
        <div className="title-form-user">PROFIL</div>
        
          <form className='add-user' onSubmit={this.submit} >
            
            <label htmlFor="lastname">Nom</label>
            <input type="text" id="lastname" onChange={this.change} />
            <figure className='logo-modify'>
              <img className='img-logo-modify' src={logoAccueil} alt='Modify'/>
            </figure>
            
            <label htmlFor="firstname">Prénom</label>
            <input type="text" id="firstname" onChange={this.change} />
            
            <label htmlFor="password">Mot de passe</label>
            <input type="text" id="password" onChange={this.change} />
            
            <label htmlFor="birthday">Date de naissance</label>
            <input type="date" id="birthday" onChange={this.change} />
            
            <label htmlFor="countrys">Pays</label>
            <CountryList country={this.state.country} change={this.change} id='countrys' />
            
            <label htmlFor="city">Ville</label>
            <input type="text" id="city" onChange={this.change} />
            
            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" onChange={this.change} />
            
            <label htmlFor="phone_number">Numéro de téléphone</label>
            <input type="text" id="phone_number" onChange={this.change} />
            
            <label htmlFor="description">Description</label>
            <input type="text" id="description" onChange={this.change} />
            
            <button className='send-form-users'>Envoyer</button>
          
          </form>
        
        <UploadFile />
        <NavFooter/>

      </div>
    );
  }
}

export default UserProfile;
