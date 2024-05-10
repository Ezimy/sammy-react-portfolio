import './index.scss';
import illustration from '../../../assets/images/illustration.svg'

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