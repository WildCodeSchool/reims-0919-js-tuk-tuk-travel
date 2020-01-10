import React, { Component } from "react"
import axios from 'axios'
import '../App.css'

class UserConnexion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault()
    const {...userLogin} = this.state
      console.log({userLogin})
      
      axios.post('http://localhost:8000/api/travels/',userLogin)
      .then(res => {
        alert('Connecté!');
      }).catch(event => {
      console.error(event);
      alert(`Erreur lors de la connexion`);
  });
  }

  render() {
    return (
      <div>
      <div className="title-user-connexion">Connecte - toi  ! </div>
          <form className="user_connexion" onSubmit={this.submitForm}>
  
                <label htmlFor="email">E-mail </label>
                <input className="input-user_connexion" type="email" id="email" name="email"
                  onChange={this.onChange} value={this.state.email}/>
             
                <label htmlFor="password">Mot de passe </label>
                <input className="input-user_connexion" type="password" id="password" name="password"
                  onChange={this.onChange} value={this.state.password} maxLength="13" size="13"/>
              
              <div className="submit-button">
                <input type="submit" value="Connexion" />
              </div>
          </form>
      </div>
    )
  }
}

export default UserConnexion;