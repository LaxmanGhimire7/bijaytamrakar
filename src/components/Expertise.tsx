
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faViber } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Figma", 
    "Framer",
    "AdobeXD",
];

const labelsSecond = [
    "Adobe Illustrator",
    "Photoshop",
];



function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faFigma} size="3x"/>
                    <h3>UI/UX Designer</h3>
                    <p>Experienced in creating user-friendly designs using Figma, Framer, and Adobe XD. Skilled in wireframing, prototyping, and building responsive UI with a focus on user needs and design consistency. Strong understanding of UX principles and effective design-to-development collaboration.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faViber} size="3x"/>
                    <h3>Graphic Designing</h3>
                    <p>Skilled in visual storytelling and branding using tools like Adobe Illustrator & Photoshop. Experienced in creating banners, social media creatives, and marketing assets with a strong focus on design principles, color theory, and brand consistency.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

             </div>  
        </div>
    </div>
    );
}

export default Expertise;