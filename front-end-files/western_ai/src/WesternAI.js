import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './WesternAI.css';
import SignUp from '../src/SignUpPage/SignUp';
import Home from '../src/Home/Home';
import Initiatives from '../src/OurInitiatives/Initiatives';
import Sponsors from '../src/OurSponsors/Sponsors';
import Apply from '../src/ApplyNow/ApplyNow';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import logo from './Components/images/WLogo.png';

class WesternAI extends React.Component {
  
  render(){
  return (
    <div className="App">
       <div class="dropdown">
         <button class="dropbtn"></button>
  <div class="dropdown-content">
    <a>Select a Page</a>
  <a href="/">Home</a>
    <a href="/initiatives">Initiatives</a>
    <a href="/sponsors">Sponsors</a>
    <a href="/signup">Sign Up</a>
    <a href="/apply">Apply Now</a>
  </div>
  </div>  
    <Router>
    <div class="topnav" id="myTopnav">
          <img class="logo" src={logo} width="125" height="100"/>
          <NavLink to="/apply" activeClassName="active">Apply Now</NavLink>
          <NavLink exact to="/signup" activeClassName="active">Sign Up</NavLink>
          <NavLink to="/sponsors" activeClassName="active">Sponsors</NavLink>
          <NavLink exact to="/initiatives" activeClassName="active">Initiatives</NavLink>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>

          
        </div> 
    <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
      <Switch location={location}>
          <Route exact path='/'component={Home}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/initiatives' component={Initiatives}/>
          <Route path='/sponsors' component={Sponsors}/>
          <Route path='/apply' component={Apply}/>
      </Switch>

      </CSSTransition>
          </TransitionGroup>
        )} />
      </Router>
    </div>
  );
}
}

export default WesternAI;