import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './WesternAI.css';
import SignUp from '../src/SignUpPage/SignUp';
import Home from '../src/Home/Home';
import Initiatives from '../src/OurInitiatives/Initiatives';
import Sponsors from '../src/OurSponsors/Sponsors';
import Apply from '../src/ApplyNow/ApplyNow';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
class WesternAI extends React.Component {
  
  render(){
  return (
    <div className="App">

      <div class="topnav" id="myTopnav">
          <div class="logo">WESTERN AI</div>
          <a href="apply">Apply Now</a>
          <a href="signup">Sign Up</a>
          <a href="sponsors">Our Sponsors</a>
          <a href="initiatives">Our Initiatives</a>
          <a href="home" class="active">Home</a>
        </div> 
    <Router>
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/initiatives' component={Initiatives}/>
          <Route path='/sponsors' component={Sponsors}/>
          <Route path='/apply' component={Apply}/>
      </Switch>
      </Router>
    </div>
  );
}
}

export default WesternAI;