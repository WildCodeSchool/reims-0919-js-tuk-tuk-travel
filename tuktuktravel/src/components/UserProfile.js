import React, { Component } from 'react';
import Moment from 'react-moment';
import { connect } from  'react-redux'
import NavFooter from './NavFooter';
import UploadAvatar from './UploadAvatar'
import axios from 'axios'
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
      description: '',
      user: []
    };
  }
  // GET ONE USER
  componentDidMount() {
    fetch(`http://localhost:8000/api/users/${this.props.userID}`,
   
    {
      method:'GET',
      headers:{
        'Authorization':  'Bearer '  +  this.props.token,
        'Content-Type':  'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        this.props.history.push('/userconnexion')
      }
      return res.json()
    })
    .then(data => {
      this.setState({
        user: data
    })
    
  })
  .catch()
  }

  // UPDATE AVATAR
  submit = e => {
    e.preventDefault();
   const update = { 
     userID: this.props.userID, 
     avatar: this.props.avatar
   }
    axios.put(`http://localhost:8000/api/users`,update)
    .then(res =>{
      this.setState({
        isAdded: true
      })
      
    }).catch(event => {
      console.error(event);
    })
  }
  
  render() {
    console.log(this.state.user)
    return (
      <div>
        <div className='title-user-profile'>PROFIL</div>
        {React.Children.toArray(this.state.user && this.state.user.map(res => (
          <div className='user-profile'>
            <div className='profile-picture-container'>
              <img src = {res.avatar} alt='profil' className='profile-picture'></img>
            </div>
            <div>Nom : {res.firstname}</div>
            <div>Prénom : {res.lastname}</div>
            <div>Date de naissance : <Moment format="DD/MM/YYYY">{res.birthday}</Moment></div>
            <div>Ville : {res.city}</div>
            <div>{res.contry}</div>
            <div>E-mail :  {res.email}</div>
            <div>Téléphone :  {res.phone_number}</div>
            <div> {res.description}</div>
          </div>
        )))}
        <UploadAvatar />

        <button className='send-form-users' onClick={this.submit}>Envoyer</button>
        {this.state.isAdded?<div>Avatar ajouté</div>:null}

        <NavFooter/>
        
      </div>
    )
  }
  
}


function  mapStateToProps(state) {
  return {
    userID: state.auth.userID,
    avatar: state.avatar.avatar
  }
}
export default connect(mapStateToProps)(UserProfile)
