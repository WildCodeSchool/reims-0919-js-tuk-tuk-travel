import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UploadAvatar from './UploadAvatar'
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
      sex: '',
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
      <div className='profile-form-users'>
        <div className="title-form-user">PROFIL</div>
        
          <form className='modify-user' onSubmit={this.submit} >
            
              <label htmlFor="lastname">Nom</label>
              <div className='profile-input-img'>
                <input type="text" id="lastname" onChange={this.change} />
                <figure className='logo-modify'>
                  <img className='img-logo-modify' src={logoModify} alt='Modify'/>
                </figure>
              </div>

            
              <label htmlFor="firstname">Prénom</label>
              <div className='profile-input-img'>
                <input type="text" id="firstname" onChange={this.change} />
                <figure className='logo-modify'>
                  <img className='img-logo-modify' src={logoModify} alt='Modify'/>
                </figure>
              </div>

            
              <label htmlFor="sex">Sexe</label>
              <div className='profile-input-img'>
                <select className="sex" id="sex" onChange={this.change} >
                  <option value=""></option>
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

            
              <label htmlFor="password">Mot de passe</label>
              <div className='profile-input-img'>
                <input type="text" id="password" onChange={this.change} />
                <figure className='logo-modify'>
                  <img className='img-logo-modify' src={logoModify} alt='Modify'/>
                </figure>
              </div>
            
              <label htmlFor="birthday">Date de naissance</label>
              <div className='profile-input-img'>
                <input type="date" id="birthday" onChange={this.change} />
                <figure className='logo-modify'>
                  <img className='img-logo-modify' src={logoModify} alt='Modify'/>
                </figure>
              </div>
            
              <label htmlFor="countrys">Pays</label>
              <div className='profile-input-img'>
                <CountryList country={this.state.country} change={this.change} id='countrys' />
                <figure className='logo-modify'>
                  <img className='img-logo-modify' src={logoModify} alt='Modify'/>
                </figure>
              </div>

            
              <label htmlFor="city">Ville</label>
              <div className='profile-input-img'>
                <input type="text" id="city" onChange={this.change} />
                <figure className='logo-modify'>
                  <img className='img-logo-modify' src={logoModify} alt='Modify'/>
                </figure>
              </div>

            
              <label htmlFor="email">E-mail</label>
              <div className='profile-input-img'>
                <input type="text" id="email" onChange={this.change} />
                <figure className='logo-modify'>
                  <img className='img-logo-modify' src={logoModify} alt='Modify'/>
                </figure>
              </div>

            
              <label htmlFor="phone_number">Numéro de téléphone</label>
              <div className='profile-input-img'>
                <input type="text" id="phone_number" onChange={this.change} />
                <figure className='logo-modify'>
                  <img className='img-logo-modify' src={logoModify} alt='Modify'/>
                </figure>
              </div>

            
              <label htmlFor="description">Description</label>
              <div className='profile-input-img'>
                <input type="text" id="description" onChange={this.change} />
                <figure className='logo-modify'>
                  <img className='img-logo-modify' src={logoModify} alt='Modify'/>
                </figure>
              </div>


            <button className='send-form-users'>Envoyer</button>
          
          </form>
        
        <UploadAvatar />
        <NavFooter/>

      </div>
    );
  }
}

export default UserProfile;
