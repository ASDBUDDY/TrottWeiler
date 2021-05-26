import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Aboutus from './Components/Aboutus';
import Home from './Components/Home';
import Login from './Components/Login'
import Adoption from './Components/Adoption'
import AdoptForm from './Components/AdoptForm'

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={Aboutus}/>
             <Route path="/login" component={Login}/>
             <Route path="/adoption" component={Adoption}/>
             <Route path="/adoptform" component={AdoptForm}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;