import React from "react"



class Footer extends React.Component{

render(){
    return(
        <div>
            <footer className="App-footer">
              <div className="Menu-footer">
                <div className="Company">
                <p>Partner Companies</p>
                <ul>
                    <li>Pedigree</li>
                    <li>Royal Canin</li>
                    <li>Drools</li>
                    <li>Just Dogs</li>
                </ul>
                </div>
                <div className="NGO">
                <p>Partner NGOs</p>
                <ul>
                    <li>People For Animals, New Delhi</li>
                    <li>Friendicoes, New Delhi</li>
                    <li>SGACC, New Delhi</li>
                    <li>We for Animals Jaipur</li>
                </ul>
                </div>
                <div className="Communities">
                <p>Communities</p>
                <ul>
                    <li>Reddit</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                </ul>
                </div>
                </div>
                <div className="Menu-options">
                <a href="#home">Home</a>
                <a href="#home">About Us</a>
                <a href="#home">Contact Us</a>
                </div>
                <p style={{fontFamily: "Comfortaa", alignSelf: "center"}}>Trott Weiler - The Pet Fit App and Website</p>

            </footer>
        </div>
    )
}


}

export default Footer