import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './ApplyNow.css';
import {Row, Form,  Col} from 'react-bootstrap';


class ApplyNow  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',name: '',program: '',year: '',familarity: ''};
    

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

  onChange(e){
    let file = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    
    reader.onload=(e)=>{
      HTMLFormControlsCollection.warn("img data ", e.target.result)
    }
  }


  render(){
  return (
    <div class="SignUp">
      <Form onSubmit = {this.handleSubmit}>
        <div class="container">
          <div class = "SignUpTitle">
            <h2 class="h2-signup">Sign Up</h2>
          </div>
          
          <Col>
            <h5 class="h5-signup">Enter Your Email Address</h5>
            <input type="email" placeholder="Email Address" email={this.state.email} onChange={this.handleEmail} required/>
          </Col>
          <Col>
            <h5 class="h5-signup">Enter Your Full Name</h5 >
            <input type="text" placeholder="Full Name" name={this.state.name} onChange={this.handleName} required pattern="^[a-zA-Z][a-zA-Z\s]*$"/>
          </Col>
          
          
          <Col>
              <h5 class="h5-signup">Enter Your Program</h5 >
              <input type="text" placeholder="Program" program ={this.state.program} onChange={this.handleProgram}  required pattern="^[a-zA-Z][a-zA-Z\s]*$"/>
          </Col>
          <Col>
            <h5 class="h5-signup">Enter Your Year</h5 >
            <div class = "year">
              <select onChange={this.handleYear} required>
                <option value="">Select Here</option>
                <option value="First Year">First Year</option>  
                <option value="Second Year">Second Year</option>  
                <option value="Third Year">Third Year</option>  
                <option value="Fourth Year">Fourth Year</option>
              </select>
            </div>
          </Col>
          
            
            
              <Col>
                <h5 class="h5-signup">Why Do You Want To Join Western AI?</h5>
              <div>
                <input type="checkbox" value="Educationals"/>
                Educationals
              </div>
              <div>
                <input type="checkbox" value="Project Teams"/>
                Project Teams
              </div>
              <div>
                <input type="text" placeholder = "Other"/>
              </div>
            </Col>
            <Col>
              <h5 class="h5-signup">Familiarity With AI</h5 >
              <div class = "experience">
                <select onChange={this.handleFam} required>
                  <option value="">Select Here</option>
                  <option value = "Never Heard of AI">Never Heard of AI</option>  
                  <option value = "Know of AI">Know of AI</option>  
                  <option value = "Some Experience with AI">Some Experience with AI</option>  
                  <option value = "Well Experienced with AI">Well Experienced with AI</option>
                </select>
              </div>
            </Col>

            <Col>
              <h5 class="h5-signup">Experience Programming</h5 >
              <div class = "programming">
                <select onChange={this.handleFam} required>
                  <option value="">Select Here</option>
                  <option value = "1">1 - Never Coded</option>  
                  <option value = "2">2</option>  
                  <option value = "3">3</option>  
                  <option value = "4">4</option>  
                  <option value = "5">5</option>  
                  <option value = "6">6</option>  
                  <option value = "7">7</option>  
                  <option value = "8">8</option>  
                  <option value = "9">9</option>  
                  <option value = "10">10</option>  

                </select>
              </div>
            </Col>

            <Col>
              <h5 class="h5-signup">Time Commitment (hourse per week)</h5 >
              <div class = "time">
                <select onChange={this.handleFam} required>
                  <option value="">Select Here</option>
                  <option value = "1-2">1-2</option>  
                  <option value = "3-4">3-4</option>  
                  <option value = "5-6">5-6</option>  
                  <option value = "7-8">7-8</option>
                  <option value = "9-10">9-10</option>
                  <option value = "10+">10+ </option>
                </select>
              </div>
            </Col>

            <Col>
                <h5 class="h5-signup">Are you interested in a PM position?</h5>
              <div>
                <input type="radio" value="Yes" name="check" />
                Yes
              </div>
              <div>
                <input type="radio" value="No"  name="check" />
                No
              </div>

            </Col>


            <Col>
                <h5 class="h5-signup">Are you interested in a director position, if so for which part of the team? (Optional)</h5>
              <div>
                <input type="checkbox" value="Projects"/>
                Projects
              </div>
              <div>
                <input type="checkbox" value="Communications"/>
                Communications
                <div>
                <input type="checkbox" value="Creative"/>
                Creative
              </div>
              <div>
                <input type="checkbox" value="Education"/>
                Education
              </div>
              <div>
                <input type="checkbox" value="Events"/>
                Events
              </div>
              <div>
                <input type="checkbox" value="Internal"/>
                Internal
              </div>
              <div>
                <input type="checkbox" value="External"/>
                External
              </div>
              </div>

            </Col>

            <Col>
              <h5 class="h5-signup">Resume Upload</h5>
              <input type="file" onChange={(e)=>this.onChange(e)}></input>
            </Col>

            

            <Col>
            <h5 class="h5-signup">GitHub Profile URL</h5>
            <input type="text" placeholder="URL" email={this.state.email} onChange={this.handleEmail} required/>
            </Col>

            <Col>
            <h5 class="h5-signup">LinkedIn URL</h5>
            <input type="text" placeholder="URL" email={this.state.email} onChange={this.handleEmail} required/>
            </Col>

            <div>
              <h5 class="hText">Below, indicate the top 3 projects you're interested in.</h5>
              <h6 class="subText">For those interested in applying for a project manager position, this will indicate the projects you're interested in leading.</h6>
            </div>

            <Col>
              <h5 class="h5-signup">Which project fields are you interested in? (First choice) *</h5 >
              <h6 class="subText">*NOTE: examples of possible projects according to each project field are listed in parenthesis.*</h6>
              <div class = "time">
                <select onChange={this.handleFam} required>
                  <option value="">Select Here</option>
                  <option value = "1-2">Beginner ML Projects (e.g dog vs cat)</option>  
                  <option value = "3-4">Non-Technical (AI/Data Awareness; Industry Analysis)</option>  
                  <option value = "5-6">Study Group (Intro to ML Study Group; Reading/Implementing Research Papers)</option>  
                  <option value = "7-8">Sunstang Collaboration</option>
                  <option value = "9-10">Computer Vision (Amazon Go check out system, crow size/line length estimator)</option>
                  <option value = "10+">Natural Language Processing (document summarization, sentiment analysis) </option>
                  <option value = "10+">Recommender System (recommend clothing based on user's purchases) </option>
                  <option value = "10+">Medical Imaging Projects (Autonomous Kidney Tumor Segmentation) </option>
                  <option value = "10+">Reinforcement Learning (AI learns to play Space Invaders) </option>
                  <option value = "10+">Finance (stock prediction) </option>
                  <option value = "10+">Self-Driving Car (using a simulator or dashcam footage) </option>
                  <option value = "10+">Super Frame Rate/Resolution </option>
                  <option value = "10+">Full-Stack Developer Team (Non-AI)</option>
                  <option value = "10+">Sports Analytics (predicting future NHL standings) </option>
                  <option value = "10+">Educationals Curriculum Development</option>

                </select>
              </div>
            </Col>


            <Col>
              <h5 class="h5-signup">Which project fields are you interested in? (Second choice) *</h5 >
              <h6 class="subText">*NOTE: examples of possible projects according to each project field are listed in parenthesis.*</h6>
              <div class = "time">
                <select onChange={this.handleFam} required>
                  <option value="">Select Here</option>
                  <option value = "1-2">Beginner ML Projects (e.g dog vs cat)</option>  
                  <option value = "3-4">Non-Technical (AI/Data Awareness; Industry Analysis)</option>  
                  <option value = "5-6">Study Group (Intro to ML Study Group; Reading/Implementing Research Papers)</option>  
                  <option value = "7-8">Sunstang Collaboration</option>
                  <option value = "9-10">Computer Vision (Amazon Go check out system, crow size/line length estimator)</option>
                  <option value = "10+">Natural Language Processing (document summarization, sentiment analysis) </option>
                  <option value = "10+">Recommender System (recommend clothing based on user's purchases) </option>
                  <option value = "10+">Medical Imaging Projects (Autonomous Kidney Tumor Segmentation) </option>
                  <option value = "10+">Reinforcement Learning (AI learns to play Space Invaders) </option>
                  <option value = "10+">Finance (stock prediction) </option>
                  <option value = "10+">Self-Driving Car (using a simulator or dashcam footage) </option>
                  <option value = "10+">Super Frame Rate/Resolution </option>
                  <option value = "10+">Full-Stack Developer Team (Non-AI)</option>
                  <option value = "10+">Sports Analytics (predicting future NHL standings) </option>
                  <option value = "10+">Educationals Curriculum Development</option>

                </select>
              </div>
            </Col>

            <Col>
              <h5 class="h5-signup">Which project fields are you interested in? (Third choice) *</h5 >
              <h6 class="subText">*NOTE: examples of possible projects according to each project field are listed in parenthesis.*</h6>
              <div class = "time">
                <select onChange={this.handleFam} required>
                  <option value="">Select Here</option>
                  <option value = "1-2">Beginner ML Projects (e.g dog vs cat)</option>  
                  <option value = "3-4">Non-Technical (AI/Data Awareness; Industry Analysis)</option>  
                  <option value = "5-6">Study Group (Intro to ML Study Group; Reading/Implementing Research Papers)</option>  
                  <option value = "7-8">Sunstang Collaboration</option>
                  <option value = "9-10">Computer Vision (Amazon Go check out system, crow size/line length estimator)</option>
                  <option value = "10+">Natural Language Processing (document summarization, sentiment analysis) </option>
                  <option value = "10+">Recommender System (recommend clothing based on user's purchases) </option>
                  <option value = "10+">Medical Imaging Projects (Autonomous Kidney Tumor Segmentation) </option>
                  <option value = "10+">Reinforcement Learning (AI learns to play Space Invaders) </option>
                  <option value = "10+">Finance (stock prediction) </option>
                  <option value = "10+">Self-Driving Car (using a simulator or dashcam footage) </option>
                  <option value = "10+">Super Frame Rate/Resolution </option>
                  <option value = "10+">Full-Stack Developer Team (Non-AI)</option>
                  <option value = "10+">Sports Analytics (predicting future NHL standings) </option>
                  <option value = "10+">Educationals Curriculum Development</option>

                </select>
              </div>
            </Col>
            <Col>
            <h5 class="h5-signup">If you had to propose a project idea, what would it/they be? (Optional)</h5>
            <input type="text" placeholder="Your answer" email={this.state.email} onChange={this.handleEmail} required/>
            </Col>


            <Col>
            <h5 class="h5-signup">Do you know anyone else applying that you'd like to work in a project team with? If yes, please include their name(s) below separated by a comma. (Optional)</h5>
            <h6 class="subText">(Please get confirmation from other team members before listing them here)</h6>
            <input type="text" placeholder="Your answer" email={this.state.email} onChange={this.handleEmail} required/>
            </Col>

            <Col>
            <h5 class="h5-signup">Is there anything else you're interested in doing for the club? Please explain below. (Optional)</h5>
            <h6 class="subText">For example, those with extensive experience in AI but low time commitment may be interested in consulting with our project teams. Designers may be interested in designing UIs for the projects that need them.</h6>
            <input type="text" placeholder="Your answer" email={this.state.email} onChange={this.handleEmail} required/>
            </Col>

            <Col>
            </Col>
          

          <div class = "buttonLoc">
            <button type="submit">Submit</button>
          </div>

        </div>
      </Form>
      

    </div>
    
    );
  }
}
export default ApplyNow;
