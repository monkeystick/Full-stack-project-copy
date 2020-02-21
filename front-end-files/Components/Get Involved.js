import React from "react";
import nl2br from 'react-newline-to-break';
import './Get Involved.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

class Involved extends React.Component{ 

    
    render(){
        const title = 'Get Involved';

        const heading1 = 'ARE YOU INTERESTED IN EDUCATIONALS?';
        const heading2 = 'ARE YOU INTERESTED IN PROJECTS?';
        const heading3 = 'ARE YOU A SPONSOR?';
      
        const texta = 'Are you interested in artificial intelligence? ';
        const texta1 = 'Would you like to work with our organization in any capacity?';
        const texta2 = 'Is red a colour?';
        const texta3 = 'If you said ‘yes’ to any of those questions, you’re the perfect match for our organization! ';
        const texta4 = 'Connect with us using one of the options below and we’ll be in touch with you.';
      
        const text1A = 'Looking to launch your career into the ';
        const text1B = 'field of artificial intelligence?';
        const text1C = 'Join our organization to capitalize on our';
        const text1D = 'tutorials and opportunities to kickstart';
        const text1E = 'your journey to the AI industry!';         
      
        const text2A = 'Want to develop cutting edge AI-based';
        const text2B = 'projects on campus? ';
        const text2C = 'Project teams give students the ';
        const text2D = 'opportunity develop and apply machine ';
        const text2E = 'learning skills. Apply for project teams to ';
        const text2F = 'unlock you career in technology! ';
      
        const text3A = 'Are you interested in sponsoring a ';
        const text3B = 'student-run, driven organization  ';
        const text3C = 'passionate about AI? ';
        const text3D = 'We’d love to have your support and ';
        const text3E = 'increase your brand exposure. ';
        

 const Button = styled.button; 
        
  const Button1 = styled.button`
  border-color: #6380e2;;
  border-radius: 40px;
  color: #6380e2;
  position: absolute;
  font-size: 2.6vmin;
  width: 200px; 
  height 75px; 
  Top: 75%;
  Left: 11%;
  Top: 75%;
 
    `;
    const Button2 = styled.button`
    border-color: #6380e2;;
    border-radius: 40px;
    color: #6380e2;
    position: absolute;
    font-size: 2.6vmin;
    width: 200px; 
    height 75px; 
    Top: 75%;
    Left: 40%;
    Top: 75%;
   
  `;
    const Button3 = styled.button`
    border-color: #6380e2;;
    border-radius: 40px;
    color: #6380e2;
    position: absolute;
    font-size: 2.6vmin;
    width: 200px; 
    height 75px; 
    Top: 75%;
    Left: 70%;
    Top: 75%;
   
  `;
 

        return (
            <div>
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
               
            </div>
            
        );
    }
}

export default Involved; 