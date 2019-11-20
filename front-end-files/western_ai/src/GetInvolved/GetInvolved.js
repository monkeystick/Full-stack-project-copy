import React from "react";
import nl2br from 'react-newline-to-break';
import './Get Involved.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import pdf from './components/sponsPackage'


class Involved extends React.Component{ 

    
    render(){
        const title = 'Get Involved';

        const heading1 = 'ARE YOU INTERESTED IN EDUCATIONALS?';
        const heading2 = 'ARE YOU INTERESTED IN PROJECTS?';
        const heading3 = 'ARE YOU A SPONSOR?';
      
  
      
  
        const text='Are you interested in artificial intelligence? Would you like to work with our organization in any capacity? Is red a colour? ';
        const textb =' If you said ‘yes’ to any of those questions, you’re the perfect match for our organization! Connect with us using one of the options below and we’ll be in touch with you.';
        const text1= 'Looking to launch your career into the field of artificial intelligence? ' 
        const text1b= 'Join our organization to capitalize on our tutorials and opportunities to kickstart your journey to the AI industry! ' ; 
        const text2= 'Want to develop cutting edge AI-based projects on campus? ';
        const text2b =' Project teams give students the opportunity develop and apply machine learning skills. Apply for project teams to unlock you career in technology!'; 
        const text3= 'Are you interested in sponsoring a student-run, driven organization passionate about AI?';
        const text3b =  'We’d love to have your support and increase your brand exposure.';



 

        return (
            <div>
                {/*
                <div class ='title'>{title}</div>
                <div class ='InvPage'>
                    <div class='top'>{texta}<br></br>{texta1}<br></br>{texta2}<br></br><br></br>{texta3}<br></br>{texta4} </div>
                    <div class='bottom1'>{text1A}<br></br>{text1B}<br></br><br></br>{text1C}<br></br>{text1D}<br></br>{text1E} </div>
                    <div class='bottom2'>{text2A}<br></br>{text2B}<br></br><br></br>{text2C}<br></br>{text2D}<br></br>{text2E}<br></br>{text2F} </div>
                    <div class='bottom3'>{text3A}<br></br>{text3B}<br></br>{text3C}<br></br><br></br>{text3D}<br></br>{text3E} </div>
                </div>
                <div class='header'>
                    <div class='H1'>{heading1}</div>
                    <div class='H2'>{heading2}</div>
                    <div class='H3'>{heading3}</div>
                </div>
                <Button1 type>Sing Up</Button1>
                <Button2 type> Apply Now</Button2>
                <Button3 type> Sponsorship Package</Button3>
                */}
                    
                    <div class="container-1">

                    <div class ="box-1">               
                            <p> {title}</p>
                            
                    </div> 
                    <div class ="box-2">
                            <h3> {text}</h3>        
                            <h3> {textb}</h3>         
                    </div> 
                    </div>

                    <div class="space"></div>
                    <div class="container-2">
                        <div class ="box-3">
                            <h3> {heading1}</h3>
                        </div>
                        <div class ="box-3">
                            <h3> {heading2}</h3>
                        </div>
                        <div class ="box-3">
                            <h3> {heading3}</h3>
                        </div>
           
                    </div>

                    <div class="container-3">
                        <div class ="box-4">
                            <h3> {text1}</h3>
                            <h3> {text1b}</h3>
                            <a href="Sign-Up-Page" class="button3">Sign Up</a>
                        </div>
                        <div class ="box-4">
                            <h3> {text2}</h3>
                            <h3> {text2b}</h3>
                            <a href="Application" class="button3">Apply Now </a>
                        </div>
                        <div class ="box-4">
                            <h3> {text3}</h3>
                            <h3> {text3b}</h3>
                            <a href="Sponsor-Package" class="button3">Sponsorship Package</a>
                           
                        </div>
                
                    </div>

                </div>
            
        );
    }
}

export default Involved; 