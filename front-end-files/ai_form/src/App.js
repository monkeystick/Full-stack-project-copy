import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown,DropdownButton,Row, Column, Button, Form, FormControl, FormGroup, Checkbox, Radio, Col} from 'react-bootstrap';
import React from 'react';
import header from './header.PNG';
import footer from './footer.PNG';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '',name: '',program: '',year: '',familarity: ''};

    this.handleEmail = this.handleEmail.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleProgram = this.handleProgram.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleFam = this.handleFam.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }

  handleProgram(event) {
    this.setState({program: event.target.value});
  }

  handleYear(event) {
    this.setState({year: event.target.value});
  }

  handleFam(event) {
    this.setState({familiarity: event.target.value});
  }

  handleSubmit(event) {
    alert('Email: ' + this.state.email + '\n' + 'Name: ' + this.state.name + '\n' + 'Program: ' + this.state.program + '\n' + 'Year: ' + this.state.year + '\n' + 'Familiarity: ' + this.state.familiarity + '\n');
    event.preventDefault();
  }
  render(){
  return (
    <div className="App">

      <div class = "header">
        <img src = {header} width = "100%" height = "75%"/>
      </div>
      
      <div class = "overview">
    <h6>This is the sign up form for those interested in general membership and those interested in project teams</h6>
    <h6>Feel free to reach out to any of the execs for more info:</h6>
      <h6>Jason Chin | VP Projects | jason.rob.chin@gmail.com</h6>
      <h6>Spencer Dale | President | sdale26@uwo.ca</h6>
      </div>

      <div class = "linktoprojects">
    <h6>After you sign up, if you wish to join a project team please select Apply Now above.</h6>
      </div>
    <Form onSubmit = {this.handleSubmit}>
  <div class="container">

      <h2>Sign Up</h2>
    <Row>
      <Col>
    <h5>Enter Your Email Address</h5>
    <input type="text" placeholder="What is your email?" email={this.state.email} onChange={this.handleEmail} required/>
      </Col>
      <Col>
    <h5>Enter Your Full Name</h5>
    <input type="text" placeholder="What is your full name?" name={this.state.name} onChange={this.handleName} required/>
      </Col>
    </Row>
    <Row>
      <Col>
    <h5>Enter Your Program</h5>
    <input type="text" placeholder="What program are you in?" program ={this.state.program} onChange={this.handleProgram}  required/>
    </Col>
    <Col>
    <h5>Enter Your Year</h5>
      <div class = "year">
      <select onChange={this.handleYear}>
        <option value="First Year">First Year</option>  
        <option value="Second Year">Second Year</option>  
        <option value="Third Year">Third Year</option>  
        <option value="Fourth Year">Fourth Year</option>
      </select>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
    <h5>Why Do You Want To Join Western AI?</h5>
    <div>
        <input type="checkbox" value="Educationals"/>
        Educationals
      </div>
      <div>
        <input type="checkbox" value="Project Teams"/>
        Project Teams
      </div>
      <div>
        <input type="text" placeholder = "Please specify any other reasons you want to join Western AI."/>
      </div>
      </Col>
      <Col>

      <h5>Familiarity With AI</h5>
      <div class = "experience">
      <select onChange={this.handleFam}>
        <option value = "Never Heard of AI">Never Heard of AI</option>  
        <option value = "Know of AI">Know of AI</option>  
        <option value = "Some Experience with AI">Some Experience with AI</option>  
        <option value = "Well Experienced with AI">Well Experienced with AI</option>
      </select>
      </div>
      </Col>
      </Row>

      <div class = "buttonLoc">
    <button type="submit">Submit</button>
    </div>

  </div>
  </Form>



    </div>
  );
}
}

export default App;