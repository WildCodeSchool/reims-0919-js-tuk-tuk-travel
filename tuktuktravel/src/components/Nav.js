import React from "react"
import {Link} from 'react-router-dom';
import '../App.css'

const Nav = () => {
return (
  <div className='Nav'>
    <Link to="/"  style={{textDecoration: 'none'}}>
     {/* <i className="far fa-comments"></i>
      <i className="fas fa-user"></i>*/}
      <i className="fas fa-home"></i>
    </Link>
  </div>
)
}
export default Nav
