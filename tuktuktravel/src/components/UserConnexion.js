import React, { Component } from "react"
import '../App.css'

class UserConnexion extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
      fetch("")
        .then(response => response.json())
    }

    render() {
        return (
          <div className="input-form-connexion">
            <form onSubmit={this.props.handleSubmit}>
              <label className='UserName' htmlFor='userName'>Nom : </label>
                <input
                id='userName'
                name='userName'
                type='text'
                value={this.props.addName}
                onChange={this.props.handleAddNameChange}
                />

              <label> 
                Identifiant : <input type="text" name="name" />
              </label>
              <label> 
                Mot de passe : <input type="text" name="password" />
              </label>
              <input className="send-button" type="submit" value="Envoyer" />
            </form>          
          </div>
        )
    }
}


export default UserConnexion;