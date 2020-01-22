import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import { connect } from  'react-redux'
import UploadAvatar from './UploadAvatar'
import CountryList from './CountryList';
import NavFooter from './NavFooter';
import logoModify from '../img/modify-icon.png';
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
    //fetch(`http://localhost:8000/api/users`,
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

  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  //UPDATE USER
  // submit = e => {
  //   e.preventDefault();
  //   const {...user} = this.state
  //   axios.get('http://localhost:8000/api/users',user)
  //   .then(res =>{
  //     alert(`Utilisateur ${this.state.firstname} ${this.state.lastname} modifié`)
  //   }).catch(event => {
  //     console.error(event);
  //     alert('User not added')
  //   })
  // }



  render() {
    console.log(this.state.user)
    return (
      <div>
        {this.state.user && this.state.user.map(res => (
          <div className='user-profile'>
            <img src = {res.avatar} alt={res.avatr}></img>
            <div>{res.firstname}</div>
            <div>{res.lastname}</div>
            <div><Moment format="DD/MM/YYYY">{res.birthday}</Moment></div>
            <div>{res.city}</div>
            <div>{res.contry}</div>
            <div> {res.email}</div>
            <div> {res.phone_number}</div>
            <div> {res.description}</div>
          </div>
        ))}
      </div>
    )
  }
  
}


function  mapStateToProps(state) {
  return {
    userID: state.auth.userID,
  }
}
export default connect(mapStateToProps)(UserProfile)
