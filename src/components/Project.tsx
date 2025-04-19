
import restaurant from '../assets/images/restaurant.jpg'
import sarangs from '../assets/images/sarangss.jpg'
import sliders from "../assets/images/sliders.jpg"
import mocha from '../assets/images/mocha.png'
import sarang from "../assets/images/sarang.jpg"
import sipalaya from '../assets/images/sipalaya.jpg'
import nabil from "../assets/images/nabil.jpg"
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
        <div className="project">
                <a href="https://www.figma.com/design/Tm8YMEj7PBTNyw0EV7EVjx/Sipalaya-infotech?t=LJ2xfPdZpa4yzVTp-1 " target="_blank" rel="noreferrer"><img src={sipalaya} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/Tm8YMEj7PBTNyw0EV7EVjx/Sipalaya-infotech?t=LJ2xfPdZpa4yzVTp-1 " target="_blank" rel="noreferrer"><h2>Sipalaya Info Tech </h2></a>
                <p>Designed a full UI for Sipalaya Info Tech using Figma.</p>
            </div>
            
            <div className="project">
                <a href="https://www.figma.com/design/p74FAUkTXq5fcFcRNyciQ5/E-learning?node-id=0-1&p=f&t=rbEcFRsjiHDCbfYZ-0" target="_blank" rel="noreferrer"><img src={sarang} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/p74FAUkTXq5fcFcRNyciQ5/E-learning?node-id=0-1&p=f&t=rbEcFRsjiHDCbfYZ-0" target="_blank" rel="noreferrer"><h2>Mock Tech</h2></a>
                <p>Designed a e-Commerce platform named Mock Tech which is UX based.</p>
            </div>
            
            <div className="project">
                <a href="https://www.figma.com/design/w2wSK3HbajC5IJhNUxXEtb/mocha?node-id=0-1&t=zCps0I0g3GS3sDEi-1 " target="_blank" rel="noreferrer"><img src={mocha} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/w2wSK3HbajC5IJhNUxXEtb/mocha?node-id=0-1&t=zCps0I0g3GS3sDEi-1 " target="_blank" rel="noreferrer"><h2>Mocha</h2></a>
                <p>Developed a Mocha online restaurant in Figma where users can place order, buy items.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/design/gHsmZa4LkFsFPWOTY0P1qk/website?node-id=0-1&t=zCps0I0g3GS3sDEi-1 " target="_blank" rel="noreferrer"><img src={sliders} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/gHsmZa4LkFsFPWOTY0P1qk/website?node-id=0-1&t=zCps0I0g3GS3sDEi-1 " target="_blank" rel="noreferrer"><h2>Slickdeals</h2></a>
                <p>Re-designed by taking inspiration from slickdeals.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/design/wwNHUdtcDOn2VeAeXCnUH3/Finance?node-id=0-1&t=XsJhT78qBO98nyOU-1 " target="_blank" rel="noreferrer"><img src={nabil} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/wwNHUdtcDOn2VeAeXCnUH3/Finance?node-id=0-1&t=XsJhT78qBO98nyOU-1 " target="_blank" rel="noreferrer"><h2>Nabil Bank</h2></a>
                <p>Re-designed mobile app of Nabil Bank using Figma where users can withdraw money, transfer balance, check balance and many more functionalities.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/design/AD0yixOdBIp8nl64ViK6RI/Saarang?t=LJ2xfPdZpa4yzVTp-1 " target="_blank" rel="noreferrer"><img src={sarangs} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/AD0yixOdBIp8nl64ViK6RI/Saarang?t=LJ2xfPdZpa4yzVTp-1 " target="_blank" rel="noreferrer"><h2>Sarang</h2></a>
                <p>Developed a Mobile app named Sarang which can be benificial for tourists to visit different places of Nepal without the need of tourist guide.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/design/dcdei9iOAn5GgPnaoPdmfo/app-website?t=XsJhT78qBO98nyOU-1 " target="_blank" rel="noreferrer"><img src={restaurant} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/dcdei9iOAn5GgPnaoPdmfo/app-website?t=XsJhT78qBO98nyOU-1 " target="_blank" rel="noreferrer"><h2>Restaurant</h2></a>
                <p>Designed a mobile app of a food restaurant.</p>
            </div>
           
        </div>
    </div>
    );
}

export default Project;