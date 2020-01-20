import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from  'react-redux';
import axios from 'axios';
import UploadAvatar from './UploadAvatar'
import CountryList from './CountryList';
import back from '../img/arrow-back.png'
import '../App.css'


class FormUsers extends Component {
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
      description: '',
      avatar: '',
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
    user.avatar = this.props.avatar
    console.log(user)
    axios.post('http://localhost:8000/api/users',user)
    .then(res =>{
      alert(`Utilisateur ${this.state.firstname} ${this.state.lastname} ajouté`)
    }).catch(event => {
      console.error(event);
      alert('User not added')
    })
  }



  render(){
    return(
      <div className='form-users'>
        <div className="title-form-user">INFOS PERSONNELLES</div>
        <Link className='link-cgu-to-formuser' to="/Home">
          <figure className='fig-back-arrow'>
            <img className='back-arrow' src={back} alt='Arrow to back'/>
          </figure>
        </Link>
        <form className='add-user' onSubmit={this.submit} >
          <label htmlFor="lastname">Nom</label>
          <input type="text" id="lastname" onChange={this.change} />
          <label htmlFor="firstname">Prénom</label>
          <input type="text" id="firstname" onChange={this.change} />
          <label htmlFor="sex">Sexe</label>
          <div className='sex-form-user'>
            <select className="sex sex-form-user" id="sex" onChange={this.change} >
            <option value=""></option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
            <option value="autre">Autre</option>
            </select>
          </div>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" onChange={this.change} />
          <label htmlFor="birthday">Date de naissance</label>
          <input type="date" id="birthday" onChange={this.change} />
          <label htmlFor="countrys">Pays</label>
          <CountryList country={this.state.country} change={this.change} />
          <label htmlFor="city">Ville</label>
          <input type="text" id="city" onChange={this.change} />
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" onChange={this.change} />
          <label htmlFor="phone_number">Numéro de téléphone</label>
          <input type="text" id="phone_number" onChange={this.change} />
          <label htmlFor="description">Description</label>
          <input type="text" id="description" onChange={this.change} />
          <Link  to="/cgu">Conditions générales d'utilisation</Link>
          <button className='send-form-users'>Envoyer</button>
        </form>
        <UploadAvatar />
      </div>
    );
  }
}

function  mapStateToProps(state) {
  return {
      avatar:  state.avatar.avatar,
  }
};

export  default  connect(mapStateToProps)(FormUsers)