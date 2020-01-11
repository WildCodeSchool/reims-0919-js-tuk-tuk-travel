import React, { Component } from "react"
import { Link } from 'react-router-dom';
import imgThirdPage from '../img/imgThirdPage.png'
import '../App.css'

class HomeIntroThird extends Component {

  render() {
    return (
      <div className='home-intro-third'>
        <figure>
          <img className='img-third-page' src={imgThirdPage} alt='image third page'/>
        </figure>
      
        <Link to="/">Suivant</Link>
      </div>

    )
  }
}

export default HomeIntroThird;