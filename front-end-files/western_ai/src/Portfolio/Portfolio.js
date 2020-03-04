import React from "react";
import './Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../Components/images/emerging-trends.png';




class Portfolio extends React.Component{ 

    
    render(){
        return(
        <div class = "body"> 
            <div class= "Header">
              <h1><b>Portfolio</b></h1>
            </div>
            <div class="col-6">
                <h3><b>
                  EMERGING TRENDS REPORT BY WESTERN AI & AI LIGHTBOX
                  (CARLEE OLSEN, SARAH WHITTAKER, JENNIFER QU)
                </b></h3>
            </div>
            <div class="row">
                <div class="col-4">
                <a href="AI-Lightbox-Emerging-Trends.pdf" target="_blank">
                    <img src={pic}></img>
                </a>
                </div>
                <div class="col-4">
                    <p>
                    Announcing the publication of AI Lightboxs Emerging Trends Annual Report.
                    AI Lightbox is a Western AI non-technical project team that aims to educate the greater Western community on how AI is transforming industries.
                    A team of three female undergraduate students with diverse backgrounds who delved into extensive research to compose this report.
                    </p>
                </div>
            </div>
        </div>   
        );
    }
}

export default Portfolio; 
