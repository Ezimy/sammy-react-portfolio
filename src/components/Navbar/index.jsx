import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import Initials from '../../assets/images/initials.png'
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
        </div>
    )
}
export default Sidebar;