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
import {Nav,Navbar,NavDropdown,Dropdown,DropdownButton,Row,Col} from 'react-bootstrap'
class WesternAI extends React.Component {
  
  render(){
  return (
    <div className="App">
      <div class="mobilenav">
        <h4 class="h4-mobile">Western AI</h4>
        <div class ="mobilemenu">
      <Dropdown>
        <div class="a">
  <Dropdown.Toggle variant="" id="dropdown-basic">
   <h5 class="h5-mobile">Menu</h5>
  </Dropdown.Toggle>
  </div>

  <Dropdown.Menu>
    <Dropdown.Item href="/">Home</Dropdown.Item>
    <Dropdown.Item href="/initiatives">Initiatives</Dropdown.Item>
    <Dropdown.Item href="/sponsors">Sponsors</Dropdown.Item>
    <Dropdown.Item href="/signup">Sign Up</Dropdown.Item>
    <Dropdown.Item href="/apply">Apply Now</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

</div>
  </div>
    <Router>
    <div class="topnav" id="myTopnav">
          <img class="logo" src={logo} width="150" height="100"/>
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