import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Home.css';
import{Row,Col} from 'react-bootstrap';

class Home extends React.Component {

  render(){
  return (
    <div class="homepage">
    <div class = "name">
<h1 class="h1-homepage-title">Western AI</h1>
<p> We are Western's on-campus undergraduate AI community. Our mission is to educate students in important AI topics, centralize and develop AI talent, and launch AI-enables careers in fields of interest.</p>
    </div>
<div class = "parallax"> </div>
<div class ="flex-container">
  <div>
    
    <h1 class="h1-homepage-goals"> Our Goals </h1>
    
    <p class="goals-desc"> We want to give Western students the skills and tools the need to tackle global challenges with artificial intelligence</p>
  </div>
  
  <div class="goals">
    <Row>
    <h1 class="h1-homepage"> /1 </h1>
    <h3 class="h3-homepage"> Educate <br/>
    <h2 class ="h2-homepage">Empower students with skills to apply artifical intelligence technology</h2> </h3>
    </Row>
  </div>
  <div class="goals">
    <Row>
    <h1 class="h1-homepage"> /2 </h1>
    <h3 class="h3-homepage"> Develop 
    <h2 class="h2-homepage"> Apply the latest cutting-edge AI Technology on projects that matter</h2></h3>
  </Row>
  </div>
  <div class="goals">
    <Row>
  <h1 class="h1-homepage"> /3 </h1>
  <h3 class="h3-homepage"> Elevate 
  <h2 class="h2-homepage"> Build a portfolio of projects to help launch your AI-enabled career</h2></h3>
  </Row>
  </div>
  </div>
  </div>
  );
}
}

export default Home;
