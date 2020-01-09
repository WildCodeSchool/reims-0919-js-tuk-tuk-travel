import React from 'react';
import myLogo from '../img/tuk-tuk logo.png';
import { Link } from 'react-router-dom';
import '../App.css'
import CountryList from './CountryList';

const Home = () => {

  return (
    <div className='firstpage'>

      <figure>
        <img src={myLogo} alt='logo'/>
      </figure>

      <div className='buttons'>

        <Link to="/formusers" className='enter-link'>S'inscrire</Link>

        <Link to="/userconnexion">Se connecter</Link>

        <CountryList/>


        {/* <Link to="/travelform">Créer un voyage</Link> */}

      </div>

    </div>
  )
}

export default Home;