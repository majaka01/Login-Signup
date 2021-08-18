import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Component/Login";
import SignUp from "./Component/Signup";

function App() {
            
  return (<Router>
    
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={""}>308 Digital Market</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/Login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Signup"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
             
      <div className="auth-wrapper">
        <div className="auth-inner">
        
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;