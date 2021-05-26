import React from "react"
import logo from '../images/trottweiler.png';

import { NavLink } from 'react-router-dom';

class Header extends React.Component{

render(){
    return(
        <div>
            <header className="App-header">
              <div className="Menu-header">
                  <div className="Left-float">
                  <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <a href="#home">Contact Us</a>
                  </div>
                  <div className='Logo-heading'>
                      <h1>Trott</h1>
                      <img className="App-logo" src={logo} alt="Logo"></img>
                      <h1>Weiler</h1>
                  </div>
                  <div className="Right-float">
                  <NavLink to="/adoption">Adoption</NavLink>
                  <a href="https://www.pedigree.com/dog-foods">Shop</a>
                  <NavLink to="/login">Login</NavLink>
                  </div>
                </div>  
            </header>
        </div>
    )
}


}

export default Header