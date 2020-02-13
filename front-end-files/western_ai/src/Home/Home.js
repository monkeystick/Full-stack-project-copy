import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Home.css';
import{Row,Col} from 'react-bootstrap';
import '../Assets/css/sponsorStyle.css'

//components

import logo1 from './images/diigital.png'
import logo2 from './images/TechAlliance.png'
import logo3 from './images/wrnch.png'

import Footer from '../Components/footer.js'

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
    <div class="table-responsive" class ="b">  
      <table align= "center" class="InitiH" > 
        <tr>
            <td width="30%" class="I1">Our Initiatives</td>
            <td width="70" class="I2">            
              We’re committed to producing top AI talent in Southwestern
              Ontario. Here are a variety of regular events we host to help you
              learn the technical skills necessary to apply artificial
              intelligence technology and participate in machine learning
              projects!
              </td>
        </tr>
      </table>

       <table align="center" class="Initi">
            <th>Educationals</th>
            <tr>
                <td colspan="2" class="W" > 
                    We host bi-weekly tutorials on everything from creating your first
                    neural network to compiling computer vision machine learning
                    projects. We believe that a collaborative environment with a
                    project-oriented curriculum is most effective to learn AI.                
                </td>
            </tr>
            <tr>
                <td colspan="2" class="W"> 
                  Not a programmer? We’ll be hosting a series of informative
                  sessions on how AI technology is disrupting your industry.             
                </td>
            </tr>
            <th>PROJECT TEAMS</th>
            <tr>
                <td colspan="2" class="W"> 
                  We’ve assembled the brightest minds at Western to work on AI-based
                  creative projects, including our self-driving car team and
                  autonomous trading algorithm.               
                </td>
            </tr>
            <tr>
                <td colspan="2" class="W"> 
                  Join us on community nights to find out more about how you can get
                  involved!               
                </td>
            </tr>
            <th>CAREER GROWTH</th>
            <tr>
                <td colspan="2" class="last"> 
                  Western AI aims to help students elevate their careers by exposing
                  them to new paths or giving them the skills to use AI in any field
                  of interest. Our network of sponsors will open up a talent
                  corridor connecting Western’s AI talent with the industry.              
                </td>
            </tr>
        </table>
    </div>




    <div>

      
        <div class="table-responsive">  
            <table class="center"> 
                <tr width="70%">
                    <td colspan="5" class="title">Get Involved</td>
                    <td >   
                        <td>                            
                        <tr>Are you interested in artificial intelligence?</tr>
                        <tr>Would you like to work with our organization in any capacity?</tr>
                        </td>
                        
                        <tr> Is red a colour?</tr>
                        <tr>If you said ‘yes’ to any of those questions, you’re the perfect match for our organization!</tr>
                        <tr>Connect with us using one of the options below and we’ll be in touch with you.</tr>
                      
                      </td>
                </tr>
            </table>

                  
                    <table class="center" >           
                        <td>
                            <table> 
                                
                                <td class = "heading">ARE YOU INTERESTED IN EDUCATIONALS</td>
                          
                                <tr><td class="space">Looking to launch your career into the field of artificial intelligence?</td></tr>

                                <tr><td>Join our organization to capitalize on our tutorials and opportunities to kickstart your journey to the AI industry!</td></tr>
                                <a href="" class="button3">Sign Up </a>                               
                            </table>
                        </td>
                        <td>
                            <table>
                                <td class = "heading">ARE YOU INTERESTED IN PROJECTS</td>
                                <tr><td class="space">Want to develop cutting edge AI-based projects on campus?</td> </tr>
                                <tr><td>Project teams give students the opportunity develop and apply machine learning skills. Apply for project teams to unlock you career in technology!</td></tr>
                                <td><a href="" class="button3">Apply Now </a></td>
                                
                                
                            </table>
                        </td>
                        <td>
                            <table>
                                <td class = "heading">ARE YOU A SPONSOR</td>
                                <tr><td class="space">Are you interested in sponsoring a student-run, driven organization passionate about AI?</td></tr>
                                <tr><td>We’d love to have your support and increase your brand exposure.</td></tr>
                                <a href="Sponsor-Package" class="button3">Sponsorship Package</a>
                                

                            </table>
                        </td>
                    </table>
        
        </div>
    </div> 
  <div className = "App">
    <h2 class="h2-sponsors">Our Sponsors</h2>
    <div className = "logoF">
   
  
      <table>
            <tr>
              <img src = {logo1} alt= "Digital Echidna" />
              <img src = {logo3} alt= "wrnch" />
              <img src = {logo2} alt= "Tech Alliance " />
            </tr>
        </table>
    </div>
    </div>








  </div>



  
  );
}
}

export default Home;
