import React, { Component } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom';
import { connect } from  'react-redux';
import back from '../img/arrow-back.png'
import logoFaux from '../img/logoFaux.png';
import '../App.css'


class UserConnexion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      flash: '',
      isNotAdded: false
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
      
      fetch('http://localhost:8000/api/login',
        {
         method: 'POST',
         headers:  new  Headers({
          'Content-Type':  'application/json'
        }),
        body:  JSON.stringify(this.state),
        })
      
      .then(res  => {
        if (!res.ok) {
          this.props.history.push('/userconnexion')
          this.setState ({
            isNotAdded : true
          })
         // throw  new  Error(res.statusText)
          
        }
        return res.json()
      })
      .then(res  =>  {
        console.log(res.user.userID)
        this.props.dispatch(
          {
            type : "CREATE_SESSION",
            userID: res.user.userID,
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
        <Link className='link-cgu-to-formuser' to="/Home">
          <figure className='fig-back-arrow'>
            <img className='back-arrow' src={back} alt='Arrow to back'/>
          </figure>
        </Link>
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
          {this.state.isNotAdded ?
              <div className='noConnexion'>
                <div className='logo-faux'>
                  <img src={logoFaux} alt='logo Faux'/>
                </div>
                <p className="erreurConnexion">Erreur de connexion</p>
              </div> : null}
      </div>
    )
  }
}

function  mapStateToProps(state) {
  return {
      token:  state.auth.token,
      userID: state.auth.userID
  }
};

export  default  connect(mapStateToProps)(UserConnexion)
