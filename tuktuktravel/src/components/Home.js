import React from 'react';
import myLogo from '../img/tuk-tuk logo.png';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className = "logo">
      <img src={myLogo} alt='logo'/>

      <Link to="/formusers"><button>S'inscrire</button></Link>

      <Link to="/travelform"><button>Proposer un Tuk Tuk</button></Link>


    </div>
  )
}

export default Home;