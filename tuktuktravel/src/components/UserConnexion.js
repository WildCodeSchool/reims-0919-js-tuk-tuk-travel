import React, { Component } from "react"
import axios from 'axios'
import '../App.css'
import NavFooter from "./NavFooter";
import { connect } from  'react-redux';

class UserConnexion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      flash: ''
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
      
      axios.post('http://localhost:8000/api/login',userLogin)
      .then(res  => {
        if (!res.ok) {
          this.props.history.push('/userconnexion')
         // throw  new  Error(res.statusText)
          
        }
        return res.json()
      })
      .then(res  =>  {
        console.log(res.token)
        this.props.dispatch(
          {
            type : "CREATE_SESSION",
            user: res.user,
            token : res.token,
            message : res.message
          }
        )
        this.props.history.push("/travelcards")
        //this.props.history.replace("/travelcards")
        this.setState({ "flash":  res.flash })
      })
      .catch(err  =>  this.setState({ "flash":  err.flash }))
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
          <NavFooter/>
      </div>
    )
  }
}

function  mapStateToProps(state) {
  return {
      token:  state.auth.token,
  }
};

export  default  connect(mapStateToProps)(UserConnexion)
