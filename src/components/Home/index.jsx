import { Link } from 'react-router-dom';
import './index.scss'
import Typewriter from "typewriter-effect"
import Logo from './Logo'
function Home(){

    return(
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <br/>
                    <Typewriter
                        loop={false}
                        onInit={(typewriter) => {
                        typewriter
                            .pauseFor(1000)
                            .changeDelay(50)
                            .typeString("Hi, <br/> I'm Sammy Yang<br/> A Web Developer")
                            .start()
                        }}
                    />
                </h1>
                <h2>
                    Frontend Developer/React.js Expert/ JavaScript Expert
                </h2>
                <div>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
            <div>
                <Logo/>
            </div>
        </div>
        </>
    );
}
export default Home;