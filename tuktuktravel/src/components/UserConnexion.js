import React, { Component } from "react"
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
    e.preventDefault();
  }

  render() {
    return (
      <div className="user_connexion">
        <h1>Connectes-toi !:)</h1>

        <form onSubmit={this.submitForm}>
          <div className="form-data">
              <label htmlFor="email">E-mail </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={this.onChange}
                value={this.state.email}/>
            </div>
            <div className="form-data">
              <label htmlFor="password">Mot de passe </label>
              <input
                type="text"
                id="password"
                name="password"
                onChange={this.onChange}
                value={this.state.password}
              />
            </div>
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
        </form>
      </div>

    )
  }
}

export default UserConnexion;