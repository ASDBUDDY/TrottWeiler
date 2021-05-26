import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../CSS/App.css';
import '../CSS/Login.css';

class Login extends React.Component{
  constructor(props){
    super(props)
    this.toggleClass= this.toggleClass.bind(this)
    this.state = {
      active: false
    }
  }
  toggleClass(){
    const currentState = this.state.active
    this.setState({active: !currentState})
  }
   
    render(){
        return(
          <div>
              <Header />
            <div className="Login">
            <div className= {this.state.active? 'right-panel-active Login-container' : "Login-container"} id="Login-container">
  <div className="Login-form-container sign-up-container">
    <form action="#">
      <h1>Create Account</h1>
      <div className="Login-social-container">
        <a href="#home" className="Login-social"><i className="fab fa-facebook-f" /></a>
        <a href="#home" className="Login-social"><i className="fab fa-google-plus-g" /></a>
        <a href="#home" className="Login-social"><i className="fab fa-linkedin-in" /></a>
      </div>
      <span>or use your email for registration</span>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
    </form>
  </div>
  <div className="Login-form-container sign-in-container">
    <form action="#">
      <h1>Sign in</h1>
      <div className="social-container">
        <a href="#home" className="Login-social"><i className="fab fa-facebook-f" /></a>
        <a href="#home" className="Login-social"><i className="fab fa-google-plus-g" /></a>
        <a href="#home" className="Login-social"><i className="fab fa-linkedin-in" /></a>
      </div>
      <span>or use your account</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#home">Forgot your password?</a>
      <button>Sign In</button>
    </form>
  </div>
  <div className="Login-overlay-container">
    <div className="Login-overlay">
      <div className="Login-overlay-panel Login-overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button onClick={this.toggleClass} className="Login-ghost" id="signIn">Sign In</button>
      </div>
      <div className="Login-overlay-panel Login-overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button onClick={this.toggleClass} className="Login-ghost" id="signUp">Sign Up</button>
      </div>
    </div>
  </div>
</div>
</div>
<Footer/>
</div>
        )
    }
}
export default Login