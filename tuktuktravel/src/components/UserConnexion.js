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
    console.log(this.state)
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
//     render() {
//         return (
//           <div className="input-form-connexion">
//             <form onSubmit={this.props.handleSubmit}>
//               <label className='UserName' htmlFor='userName'>Nom : </label>
//                 <input
//                 id='userName'
//                 name='userName'
//                 type='text'
//                 value={this.props.addName}
//                 onChange={this.props.handleAddNameChange}
//                 />

//               <label> 
//                 Identifiant : <input type="text" name="name" />
//               </label>
//               <label> 
//                 Mot de passe : <input type="text" name="password" />
//               </label>
//               <input className="send-button" type="submit" value="Envoyer" />
//             </form>          
//           </div>
//         )
//     }
// }


export default UserConnexion;