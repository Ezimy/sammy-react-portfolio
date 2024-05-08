import './index.scss';
import logo from '../../../images/logo.png';

function Logo(){
    return(
        <div className='logo-container'>
            <img
            src={logo}
            />
        </div>
    )
}
export default Logo;