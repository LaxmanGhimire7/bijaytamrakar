
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
                <p></p>
            </div>
            
            <div className="project">
                <a href="https://www.figma.com/design/p74FAUkTXq5fcFcRNyciQ5/E-learning?node-id=0-1&p=f&t=rbEcFRsjiHDCbfYZ-0" target="_blank" rel="noreferrer"><img src={sarang} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/p74FAUkTXq5fcFcRNyciQ5/E-learning?node-id=0-1&p=f&t=rbEcFRsjiHDCbfYZ-0" target="_blank" rel="noreferrer"><h2>Mock Tech</h2></a>
                <p></p>
            </div>
            
            <div className="project">
                <a href="https://www.figma.com/design/w2wSK3HbajC5IJhNUxXEtb/mocha?node-id=0-1&t=zCps0I0g3GS3sDEi-1 " target="_blank" rel="noreferrer"><img src={mocha} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/w2wSK3HbajC5IJhNUxXEtb/mocha?node-id=0-1&t=zCps0I0g3GS3sDEi-1 " target="_blank" rel="noreferrer"><h2>Mocha</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/design/gHsmZa4LkFsFPWOTY0P1qk/website?node-id=0-1&t=zCps0I0g3GS3sDEi-1 " target="_blank" rel="noreferrer"><img src={sliders} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/gHsmZa4LkFsFPWOTY0P1qk/website?node-id=0-1&t=zCps0I0g3GS3sDEi-1 " target="_blank" rel="noreferrer"><h2>Slickdeals</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={nabil} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>Nabil Bank</h2></a>
                <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/design/AD0yixOdBIp8nl64ViK6RI/Saarang?t=LJ2xfPdZpa4yzVTp-1 " target="_blank" rel="noreferrer"><img src={sarangs} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/AD0yixOdBIp8nl64ViK6RI/Saarang?t=LJ2xfPdZpa4yzVTp-1 " target="_blank" rel="noreferrer"><h2>Sarang</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={restaurant} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Restaurant</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
           
        </div>
    </div>
    );
}

export default Project;