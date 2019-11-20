import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Home.css';

class Home extends React.Component {

  render(){
  return (
    <div>
    <div class = "name">
<h2>OUR MISSION:</h2>
<h1>Western AI</h1>
<p> We are Western's on-campus undergraduate AI community. Our mission is to educate students in important AI topics, centralize and develop AI talent, and launch AI-enables careers in fields of interest.</p>
    </div>
<div class = "parallax"> </div>
<div class ="flex-container">
  <div>
    <h5> Our Goals </h5>
    <p> We want to give Western students the skills and tools the need to tackle global challenges with artificial intelligence</p>
  </div>
  <div>
    <h1> /1 </h1>
    <h3> Educate </h3>
    <h2> Empower students with skills to apply artifical intelligence tchnology in various industries and fields of study </h2>
  </div>
  <div>
    <h1> /2 </h1>
    <h3> Develop </h3>
    <h2> Apply the latest cutting-edge AI Technology on porjects that matter</h2>
  </div>
  <div>
  <h1> /3 </h1>
  <h3> Elevate </h3>
  <h2> Build a portfolio of projects to help launch you AI-enabled career in your field of interest</h2>
  </div>
  </div>
  <div class ="flex-container-2">
  <div>
    <h4> OUR INITIATIVE </h4>
    <p2> We're committed to producing top AI talent in Southwestern Ontario. Here are a variety of regular events we host to help you learn the technical skills necessary to apply artifical intelligence technology and participate in machine learning projects </p2>
  </div>
  <div>
    <p2> EDUCATIONALS </p2>
    <p2> We host bi-weekly tutorials on everything from creating your first neural network to compliling computer vision machine learning projects. We believe that a collaborative environment with a project-oriented curriculum is most effective to learn AI</p2>
    <p2> Not a programmer? We'll be hosting a series of informative sessions on how AI technology is disrupting your industry</p2>
  </div>
  <div>
  <p2> PROJECT TEAMS </p2>
  <p2> We've assembled the brightest minds at Western to work on AI-based creative projects, including our self-driving car team and autonomous trading algorithm</p2>
  <p2> Join us on community nights to find out more about how you can get involved! </p2>
  </div>
  </div>
    </div>
  );
}
}

export default Home;
