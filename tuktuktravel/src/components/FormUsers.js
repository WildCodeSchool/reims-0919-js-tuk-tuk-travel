import React, { Component } from 'react';


class FormUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      birthday: '',
      address: '',
      email: '',
      phone_number: '',
      description: '',
    };
  }

  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submit = e => {
    e.preventDefault();
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.submit} >
          <label htmlfor="firstname">Prénom</label>
          <input type="text" id="firstname" onChange={this.change} />
          <label htmlfor="lastname">Nom</label>
          <input type="text" id="lastname" onChange={this.change} />
          <label htmlfor="birthday">Age</label>
          <input type="text" id="birthday" onChange={this.change} />
          <label htmlfor="address">Adresse</label>
          <input type="text" id="address" onChange={this.change} />
          <label htmlfor="email">e-mail</label>
          <input type="text" id="email" onChange={this.change} />
          <label htmlfor="phone_number">Numéro de téléphone</label>
          <input type="text" id="phone_number" onChange={this.change} />
          <label htmlfor="description">Description</label>
          <input type="text" id="description" onChange={this.change} />
          <button>Envoyer</button>
        </form>
      </div>
    );
  }
}

export default FormUsers;