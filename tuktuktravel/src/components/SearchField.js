import React from 'react';
import '../App.css';

const SearchField = (props) =>{
  return(
      <div className = "search-field">
        <input onChange={props.searchField} value={props.input} id='searchField' type = 'text' placeholder = 'Veuillez saisir un pays'></input>
        <button onClick = {props.getCoutrys} className='country-button' value = 'search'>Rechercher</button>
      </div>
    );
  }

export default SearchField;
