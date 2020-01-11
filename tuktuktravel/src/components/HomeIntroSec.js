import React, { Component } from "react"
import { Link } from 'react-router-dom';
import imgSecPage from '../img/imgSecPage.png'
import '../App.css'

class HomeIntroSec extends Component {

  render() {
    return (
      <div className='home-intro-sec'>
        <figure>
          <img className='img-sec-page' src={imgSecPage} alt='image second page'/>
        </figure>

        <Link to="/introthird">Suivant</Link>
      </div>
    )
  }
}

export default HomeIntroSec;