import Loader from 'react-loaders';
import Typewriter from "typewriter-effect";
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import './index.scss'
function Contact(){
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_zccs6b9', 'template_bo1e8l8', form.current)
            .then((response) => {
                alert('Message successfully sent!', response.text); 
                form.current.reset();
                window.location.reload(false)
            })
            .catch((error) => {
                alert('Failed to send message. Please try again.', error);
            });
    };
    return(
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <Typewriter
                        loop={false}
                        onInit={(typewriter) => {
                        typewriter
                            .pauseFor(2000)
                            .changeDelay(50)
                            .typeString("Contact Me")
                            .start()
                        }}
                    />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas id numquam doloribus at hic dignissimos quisquam dicta, culpa perspiciatis fugit omnis ratione. Fuga praesentium necessitatibus aliquid amet! Quidem, quia vel!
                </p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <div className='name-email'>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                            </div>
                            <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                >
                                </textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <Loader type='cube-transition'/>
        </div>
    )
}
export default Contact;