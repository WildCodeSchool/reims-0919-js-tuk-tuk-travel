import React, { Component } from 'react';
import Moment from 'react-moment';
import { connect } from  'react-redux'
import NavFooter from './NavFooter';
import '../App.css'
import UploadAvatar from './UploadAvatar';



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

  change = e => {
    this.setState({
      [e.target.id]: e.target.value
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
        <NavFooter/>
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
