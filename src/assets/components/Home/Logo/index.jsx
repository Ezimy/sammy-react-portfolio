import './index.scss';
import logo from '../../../images/logo.png';
import illustration from '../../../images/illustration.svg'

function Logo(){
    return(
        <div className='logo-container'>
            <img
            src={illustration}
            />
        </div>
    )
}
export default Logo;