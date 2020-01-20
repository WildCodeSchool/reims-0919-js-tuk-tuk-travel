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
      {/* <Link className='link-footer' to="/home">
        <figure className='logos-footer'>
          <img className='img-footer' src={logoAccueil} alt='logo accueil'/>
        </figure>
        <p className="title_footer">Accueil</p>
      </Link> */}
      <Link className='link-footer' to="/TravelCards">
        <figure className='logos-footer'>
          <img className='img-footer' src={logoExplorer} alt='logo explorer'/>
        </figure>
        <p className="title_footer">Explorer</p>
      </Link>
      <Link className='link-footer' to="/TravelForm">
        <figure className='logos-purpose'>
          <img className='img-footer-purpose' src={logoProposer} alt='logo proposer'/>
        </figure>
        <p className="title_footer">Proposer</p>
      </Link>
      <div className='lien'>
        <figure className='logos-footer'>
          <img className='img-footer' src={logoVoyages} alt='logo voyages'/>
        </figure>
        <p className="title_footer">Mes voyages</p>
      </div>
      <Link className='link-footer' to="/profile">
        <figure className='logos-footer'>
          <img className='img-footer' src={logoParametre} alt='logo parametres'/>
        </figure>
        <p className="title_footer">Paramètres</p>
      </Link>
      
    </div>
  )  
}


export default NavFooter