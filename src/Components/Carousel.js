import React from "react"
import ButtonCross from './ButtonCross'
import imagePaths from '../Data/ImageData'
import { NavLink } from 'react-router-dom';


  
  class Carousel extends React.Component {
    constructor() {
      super();
      this.state = { currentGP: 0 };
      this.interval = null;
  
      this.nextGP = this.nextGP.bind(this);
    }
  
    nextGP() {
      let current = this.state.currentGP;
      let next = ++current % imagePaths.length;
      this.setState({ currentGP: next });
    }
  
    componentDidMount() {
      this.interval = setInterval(this.nextGP, 5000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      let src = imagePaths[this.state.currentGP];
      return (
        <div className='Carousel-container'>
          <img className="Carousel-img" src={src} alt='Carousel' />
          <h1>Pets = Happiness.</h1>
          <div className='Button-container'>
          <NavLink to="/adoption">
          <ButtonCross name='Adopt'/></NavLink>
          <NavLink to="/adoptform">
          <ButtonCross name='Discover'/></NavLink>
          </div>
        </div>
      );
    }
  }
  
  export default Carousel