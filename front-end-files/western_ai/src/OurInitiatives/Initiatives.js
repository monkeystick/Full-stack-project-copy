import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Initiatives.css";

class Initiatives extends React.Component {
  render() {
    return (
      <div>
        <div class="container1">
          <div class="box1">
            <h1>Our Initiatives</h1>
          </div>
          <div class="box2">
            <p>
              We’re committed to producing top AI talent in Southwestern
              Ontario. Here are a variety of regular events we host to help you
              learn the technical skills necessary to apply artificial
              intelligence technology and participate in machine learning
              projects!
            </p>
          </div>
        </div>
        <div class="container2">
          <div class="box3">
            <p class="box4">EDUCATIONALS</p>
            <p>
              We host bi-weekly tutorials on everything from creating your first
              neural network to compiling computer vision machine learning
              projects. We believe that a collaborative environment with a
              project-oriented curriculum is most effective to learn AI.
            </p>
            <p>
              Not a programmer? We’ll be hosting a series of informative
              sessions on how AI technology is disrupting your industry.
            </p>
          </div>
          <div class="box5">
            <p class="box6">PROJECT TEAMS</p>
            <p>
              We’ve assembled the brightest minds at Western to work on AI-based
              creative projects, including our self-driving car team and
              autonomous trading algorithm.
            </p>
            <p>
              Join us on community nights to find out more about how you can get
              involved!
            </p>
          </div>
          <div class="box7">
            <p class="box8">CAREER GROWTH</p>
            <p>
              Western AI aims to help students elevate their careers by exposing
              them to new paths or giving them the skills to use AI in any field
              of interest. Our network of sponsors will open up a talent
              corridor connecting Western’s AI talent with the industry.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Initiatives;
