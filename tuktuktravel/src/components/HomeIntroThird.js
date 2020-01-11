import React, { Component } from "react"
import { Link } from 'react-router-dom';
import imgThirdPage from '../img/imgThirdPage.png'
import '../App.css'

class HomeIntroThird extends Component {

  render() {
    return (
      <div className='home-intro'>
        <figure className='figure-img-third-page'>
          <img className='img-third-page' src={imgThirdPage} alt='third page'/>
        </figure>
        <div className='title-intro'> 
          TROUVE TON  VOYAGE IDEAL
        </div>
        <div className='text-intro'> 
          Le monde est plus ouvert que jamais, autant en profiter
        </div>
        <div className='intro-link'>
          <Link to="/home">Suivant</Link>
        </div>
      </div>
    )
    }
    }

export default HomeIntroThird;