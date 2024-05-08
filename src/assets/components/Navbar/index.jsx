import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import { FaReact } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Initials from '../../images/initials.png'
function Sidebar() {
    return(
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Initials} alt='SY.'/>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color='#224870'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about" to="/About">
                    <FontAwesomeIcon icon={faUser} color='#224870'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact" to="/Contact">
                    <FontAwesomeIcon icon={faEnvelope} color='#224870'/>
                </NavLink>
            </nav>
            {/* <ul className='socials'>
                <li>
                    <a 
                    href='https://www.linkedin.com/in/sammy-yang29/'
                    rel='norefferer'
                    target='_blank'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color='#224870'/>
                    </a>
                </li>
                <li>
                    <a 
                    href='github.com/Ezimy/'
                    rel='norefferer'
                    target='_blank'
                    >
                        <FontAwesomeIcon icon={faGithub} color='#224870'/>
                    </a>
                </li>
                <li>
                    <a 
                    href='www.youtube.com/@sammyyang5549'
                    rel='norefferer'
                    target='_blank'
                    >
                        <FontAwesomeIcon icon={faYoutube} color='#224870'/>
                    </a>
                </li>
            </ul> */}
        </div>
    )
}
export default Sidebar;