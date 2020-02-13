import React from "react";
import './GetInvolved.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import{Row,Col} from 'react-bootstrap';
import SignUp from '../SignUpPage/SignUp';
import { Button} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';





class Involved extends React.Component{ 

    
    render(){
        return (
            
            <div>
                <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"></link>
            <div class="title">
                <h1>Get Involved</h1>
            </div>

            <div class="overview">
                <h5 class="h5-overview">Are you interested in artificial intelligence? Would you like to work with our organization in any capacity? Is red a colour?
                    If you said ‘yes’ to any of those questions, you’re the perfect match for our organization! Connect with us using one of the options below and we’ll be in touch with you.
                </h5>
            </div>

            <div class="educationals">
                <h4 class="titles">ARE YOU INTERESTED IN EDUCATIONALS?</h4>
                <h5 class="h5-options">Looking to launch your career into the field of artificial intelligence?
                    Join our organization to capitalize on our tutorials and opportunities to kickstart your journey to the AI industry!</h5>
                <button>Educationals</button>
            </div>

            <div class="projects">
                <h4 class="titles">ARE YOU INTERESTED IN PROJECTS?</h4>
                <h5 class="h5-options">Want to develop cutting edge AI-based projects on campus? 
                    Project teams give students the opportunity develop and apply machine learning skills. Apply for project teams to unlock you career in technology!</h5>
                <button>Projects</button>
            </div>

            <div class="sponsors">
                <h4 class="titles">ARE YOU A SPONSOR?</h4>
                <h5 class="h5-options">Are you interested in sponsoring a student-run, driven organization passionate about AI?
                    We’d love to have your support and increase your brand exposure.</h5>
                <button>Sponsors</button>
            </div>
            </div>
            
            
        );
    }
}

export default Involved; 