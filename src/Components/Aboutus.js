
import React from 'react';
import '../CSS/App.css';
import '../CSS/CardAnimation.css'
import logo from '../images/trottweiler.png';
import aboutData from '../Data/AboutData'

import Header from './Header'
import CardAnimation from './CardAnimation'
import Footer from './Footer'


class Aboutus extends React.Component {
  render(){

  
  return (
    <div className="App">
      
      <Header />
      <div className= "Heading-tag">
      <h1>Pets = Friendship.</h1>
      </div>
      <CardAnimation src={logo} content={aboutData} heading='About Us' />
      <Footer />
    </div>
  )
  }
}

export default Aboutus;
