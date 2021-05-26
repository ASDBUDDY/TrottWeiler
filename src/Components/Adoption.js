import React from 'react';
import '../CSS/App.css';
import '../CSS/ProfileCard.css'
import PetData from '../Data/PetData'
import { NavLink } from 'react-router-dom';


import Header from './Header'
import ProfileCard from './ProfileCard'
import ButtonCross from './ButtonCross'
import Footer from './Footer'


class Adoption extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      profileData: PetData
    }
  }
  render(){

    const petProfile = this.state.profileData.map(item => <ProfileCard key={item.id} pet={item}/>)
  
  return (
    <div className="App">
      
      <Header />
      <div className= "Heading-tag">
      <h1>Pets = Responsibilites.</h1>
      </div>
     <div className='Stray'>
     <NavLink to="/adoptform">
       <ButtonCross name="Found a stray?" /></NavLink>
       </div>
      <div className="ProfileCard-container">
      {petProfile[0]}
      {petProfile[1]}
      {petProfile[2]}
      </div>
      <div className="ProfileCard-container">
      {petProfile[3]}
      {petProfile[4]}
      {petProfile[5]}
      </div>
      <Footer />
    </div>
  )
  }
}

export default Adoption;
