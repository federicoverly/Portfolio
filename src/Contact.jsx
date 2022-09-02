import React, { useEffect } from 'react';
import './Contact.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    
    useEffect(() => {
        Aos.init({ duration: 2000})
      }, [])
   
    return (
        <div className="contactme">
            <div data-aos="fade-up" className="contactme__title" id="contact">
                <h1>CONTACT ME</h1>
            </div>
            <div  data-aos="fade-up" className="contactme__info">
               <h3>Take a look at 
                   <span><a href="https://www.linkedin.com/in/federicoverly/"><LinkedInIcon /></a></span>
                   <span><a href="https://github.com/federicoverly"><GitHubIcon /></a></span>
                   </h3>
                <h3>You can also email me at: federicoverly@gmail.com </h3>

            </div>

        </div>
    )
}

export default Contact