import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import bijay from '../assets/images/bijay.png'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={bijay} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            
            <a href="https://www.linkedin.com/in/bijay-tamrakar-a59a47344/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Bijay Tamrakar</h1>
          <p>UI/UX Designer</p>

          <div className="mobile_social_icons">
            
            <a href="https://www.linkedin.com/in/bijay-tamrakar-a59a47344/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;