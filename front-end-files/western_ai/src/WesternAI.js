import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './WesternAI.css';
import SignUp from '../src/SignUpPage/SignUp';
import Home from '../src/Home/Home';
import Initiatives from '../src/OurInitiatives/Initiatives';
import Sponsors from '../src/OurSponsors/Sponsors';
import Apply from '../src/ApplyNow/ApplyNow';
import Involve from '../src/GetInvolved/GetInvolved';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import logo from './Components/images/WLogo.png';
import {Nav,Navbar,NavDropdown,Dropdown,DropdownButton,Row,Col} from 'react-bootstrap'
import Involved from '../src/GetInvolved/GetInvolved';
import Portfolio from './Portfolio/Portfolio';
class WesternAI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mobile: 0};

    this.handleMobile = this.handleMobile.bind(this);
  }

  handleMobile(event) {
    const showing = this.state.mobile;
    if(showing == 1){
    this.setState({mobile:0});
    document.getElementById("ms").style.opacity = 0;
    document.getElementById("mm").style.textOrientation = "mixed";
    }

    if(showing == 0){
      this.setState({mobile:1});
      document.getElementById("ms").style.opacity = 1;
      document.getElementById("mm").style.textOrientation = "upright";
      }
  }
  
  render(){
  return (
    
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet"></link>
      <div class="mobilenav">
        <h4 href="/" class="h4-mobile">Western AI</h4>
       
      <button class="mobilemenu" id="mm" onClick={this.handleMobile}>
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
        </button>
     


</div>
<div id="ms" class="mobileslide">
        <a href="/">Home</a>
        <a href="/initiatives">Initiatives</a>
        <a href="/sponsors">Sponsors</a>
        <a href="/involved">Get Involved</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/signup">Sign Up</a>
        <a href="/applynow">Apply Now</a>
      </div>
    <Router>
    <div class="topnav" id="myTopnav">
          <img class="logo" src={logo} width="100" height="90"/>
          <NavLink  to="/apply" activeClassName="active">Apply Now</NavLink>
          <NavLink  exact to="/signup" activeClassName="active">Sign Up</NavLink>
          <NavLink  to="/involved" activeClassName="active">Get Involved</NavLink>
          <NavLink  to="/portfolio" activeClassName="active">Portfolio</NavLink>
          <NavLink  to="/sponsors" activeClassName="active">Sponsors</NavLink>
          <NavLink  exact to="/initiatives" activeClassName="active">Initiatives</NavLink>
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
          <Route path='/involved' component={Involve}/>
          <Route path='/portfolio' component={Portfolio}/>
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