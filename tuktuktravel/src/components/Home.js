import React from 'react';
import myLogo from '../img/tuk-tuk logo.png'

const Home = () => {

  return (
    <div className = "logo">
      <img src={myLogo} alt='logo'/>

      <button>S'inscrire</button>

      <button>Proposer un Tuk Tuk</button>


    </div>
  )
}

export default Home;