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
import {Nav,Navbar,Dropdown} from 'react-bootstrap'
class WesternAI extends React.Component {
  
  render(){
  return (
    <div className="App">
      <div class="mobilenav">
      <Navbar bg="primary" variant="dark">
    <Navbar.Brand>Western AI</Navbar.Brand>

    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/initiatives">Initiatives</Nav.Link>
      <Nav.Link href="/sponsors">Sponsors</Nav.Link>
      <Nav.Link href="/signup">Sign Up</Nav.Link>
      <Nav.Link href="/apply">Apply Now</Nav.Link>
    </Nav>
  </Navbar>
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