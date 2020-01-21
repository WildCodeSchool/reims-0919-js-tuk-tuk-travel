import React from 'react';
import '../App.css';

const SearchField = (props) =>{
  return(
      <div className = "search-field">
        <input onChange={props.searchField} value={props.input} id='searchField' type = 'text' placeholder = 'Veuillez saisir un nom de film'></input>
      </div>
    );
  }

export default SearchField;
