import React from 'react'

class ProfileCard extends React.Component{
    render(){
        return(
            <div className="Profile-wrapper">
  <div className="Profile-card">
    <img src={this.props.pet.imagesrc} alt="petpic" />
    <div className="Profile-content">
    <h2>{this.props.pet.name}</h2>
    <p>Species:{this.props.pet.species}</p>
    <p>Breed:{this.props.pet.breed}</p>
    <p>About:{this.props.pet.about}</p>
    </div>
    <span className="Profile-left bottom">Tel:{this.props.pet.tel}</span>
    <span className="Profile-right bottom">Posted by:{this.props.pet.user}</span>
    
  </div>
  </div>

        )
    }
}

export default ProfileCard