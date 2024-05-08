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
                            .changeDelay(50)
                            .typeString("Hi, <br/> I'm Sammy Yang<br/> A Web Developer")
                            .start()
                            .callFunction((state)=>{
                                state.elements.cursor.style.animation='none'
                                state.elements.cursor.style.display='none'
                            })
                        }}
                    />
                </h1>
                <h2>
                    <Typewriter
                        onInit={(typewriter) => {
                        typewriter
                            .pauseFor(3000)
                            .changeDelay(40)
                            .typeString("Frontend Developer/React.js Expert/ JavaScript Expert")
                            .start();
                        }
                    }
                    />
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