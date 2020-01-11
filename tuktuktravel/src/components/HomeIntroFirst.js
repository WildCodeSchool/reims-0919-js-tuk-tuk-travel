import React, { Component } from "react"
import { Link } from 'react-router-dom';
import imgFirstPage from '../img/imgFirstPage.png'
import '../App.css'

class HomeIntroFirst extends Component {

  render() {
    return (
      <div className='home-intro-first'>
        <figure>
          <img className='img-first-page' src={imgFirstPage} alt='image first page'/>
        </figure>
        <div className='title-intro-first'> 
          EXPLORE LE MONDE
        </div>
        <div className='text-intro-first'> 
          Le monde est plus ouvert que jamais, autant en profiter
        </div>
        <Link to="/introsecond">Suivant</Link>
      </div>
    )
  }
}

export default HomeIntroFirst;