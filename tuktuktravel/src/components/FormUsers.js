import React, { Component } from 'react';
import axios from 'axios';
import UploadFile from './UploadFile'
import '../App.css'

class FormUsers extends Component {
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
      <div >
        <form className='add-user' onSubmit={this.submit} >
          <label htmlFor="lastname">Nom</label>
          <input type="text" id="lastname" onChange={this.change} />
          <label htmlFor="firstname">Prénom</label>
          <input type="text" id="firstname" onChange={this.change} />
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" onChange={this.change} />
          <label htmlFor="birthday">Date de naissance</label>
          <input type="date" id="birthday" onChange={this.change} />
          <label htmlFor="country">Pays</label>
          <input type="text" id="country" onChange={this.change} />
          <label htmlFor="city">Ville</label>
          <input type="text" id="city" onChange={this.change} />
          <label htmlFor="email">e-mail</label>
          <input type="text" id="email" onChange={this.change} />
          <label htmlFor="phone_number">Numéro de téléphone</label>
          <input type="text" id="phone_number" onChange={this.change} />
          <label htmlFor="description">Description</label>
          <input type="text" id="description" onChange={this.change} />
          <button className='send-form-users'>Envoyer</button>
        </form>
        <UploadFile />
      </div>
    );
  }
}

export default FormUsers;