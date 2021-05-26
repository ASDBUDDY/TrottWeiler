import React from 'react'
import '../CSS/App.css';


import Header from './Header'

import Footer from './Footer'


class AdoptForm extends React.Component{
    render() {
        return(
            <div className='App'>
                <Header />
                <div className='Form-wrapper'>
                <iframe className="Google-form" title='Adoption-form' src="https://docs.google.com/forms/d/e/1FAIpQLSePxxQAcyrTWrL4_O_tjQaCOqBuun-XpbPxH1ijjUYYb82Dgg/viewform?embedded=true" width="640" height="1159" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        <Footer />
        </div>
        )
    }
}

export default AdoptForm