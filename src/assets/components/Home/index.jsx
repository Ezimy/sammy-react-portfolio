import { Link } from 'react-router-dom';
import './index.scss'
import Typewriter from "typewriter-effect"
function Home(){

    return(
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <br/>
                    <Typewriter
                        onInit={(typewriter) => {
                        typewriter
                            .typeString("Hi, <br/> I'm Sammy <br/> A Web Developer")
                            .pauseFor(1000)
                            .start();
                        }}
                    />
                </h1>
                <h2>
                    Frontend Developer/React.js Expert/ JavaScript Expert
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </h2>
            </div>
        </div>
        </>
    );
}
export default Home;