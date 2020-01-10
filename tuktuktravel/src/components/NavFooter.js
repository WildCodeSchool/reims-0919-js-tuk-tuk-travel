import React from "react";
import {Link} from 'react-router-dom';
import logoAccueil from '../img/logoAccueil.png';
import logoExplorer from '../img/logoExplorer.png';
import logoProposer from '../img/logoProposer.png';
import logoVoyages from '../img/logoVoyages.png';
import logoParametre from '../img/logoParametre.png'
import '../App.css'


const NavFooter = () => {
  return(
    <div className='footer'>
      <Link className='lien' to="/">
        <figure className='logoAccueil'>
          <img src={logoAccueil} alt='logo accueil'/>
        </figure>
        <p>Accueil</p>
      </Link>
      <Link className='lien' to="/TravelCards">
        <figure className='logoExplorer'>
          <img src={logoExplorer} alt='logo explorer'/>
        </figure>
        <p>Voyages</p>
      </Link>
      <Link className='lien' to="/TravelForm">
        <figure className='logoProposer'>
          <img src={logoProposer} alt='logo proposer'/>
        </figure>
        <p>Proposer un voyage</p>
      </Link>
      <div className='lien'>
        <figure className='logoVoyages'>
          <img src={logoVoyages} alt='logo voyages'/>
        </figure>
        <p>Mes voyages</p>
      </div>
      <div className='lien'>
        <figure className='logoparametre'>
          <img src={logoParametre} alt='logo parametres'/>
        </figure>
        <p>Paramètres</p>
      </div>
    </div>
  )  
}


export default NavFooter