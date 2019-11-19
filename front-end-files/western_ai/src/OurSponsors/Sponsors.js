import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

//style
import '../Assets/css/sponsorStyle.css'

//components

import logo1 from './images/diigital.png'
import logo2 from './images/TechAlliance.png'
import logo3 from './images/wrnch.png'

import Footer from '../Components/footer.js'


class Sponsors extends React.Component {

  render(){
  return (
    <div className = "App">
    <h2> Our Sponsors</h2>
    
    
    <div className = "logos">
    <img src = {logo1} alt= "Digital Echidna"/>
    <img src = {logo3} alt= "wrnch"/>
    <img src = {logo2} alt= "Tech Alliance "/>
    <Footer/>
    </div>
    </div>
  );
}
}

export default Sponsors;
