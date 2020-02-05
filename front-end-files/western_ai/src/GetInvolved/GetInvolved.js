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
        );
    }
}

export default Involved; 