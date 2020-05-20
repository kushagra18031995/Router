import React from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom'
function Nav() {
    const navStyle={
        color: 'yellow',
    } 
  return (
   <nav className ="nav-class">
       <h3>Logo</h3>
       <ul className ="nav-length"> 
       <li ><Link style ={navStyle} to ='./About'>About</Link></li>
       <li><Link to ='./Shop' style ={navStyle} >People List</Link></li>
       {/* <li><Link to ='./Inform' style ={navStyle}>Inform</Link></li> */}
       </ul>
   </nav>
  );
}

export default Nav;
