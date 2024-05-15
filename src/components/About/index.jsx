import Loader from 'react-loaders';
import './index.scss'
import Typewriter from "typewriter-effect"
function About(){
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                        <Typewriter
                            loop={false}
                            onInit={(typewriter) => {
                            typewriter
                                .pauseFor(2000)
                                .changeDelay(50)
                                .typeString("About Me")
                                .start()
                            }}
                        />
                </h1>
                <p>
                    <br/>
                    Hello Everyone, I am Sammy Yang from Ontario, Canada.
                    <br/>
                    I am a web developer that is focused on creating react based apps.
                    <br/>
                    I graduated from York University with a degree in computer science.
                    <br/>
                </p>
            </div>
        </div>
        <Loader type='cube-transition'/>
        </>
    )
}
export default About;