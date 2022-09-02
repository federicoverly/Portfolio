import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

/*const aboutMe = [{
    question: "What are my studies?",
    answer: "I have a bachelor in IR, a Master in National Defense and a Master in China Studies. In 2020 I started my developer career with courses about Python, Django and React JS"
},{
    question: "What is my developer experience?",
    answer: "I have worked freelance developing some landing websites while I continue learning through cloning",
}, {
    question: "What can I do for you?",
    answer: "I am ready to sketch and develop your website!" 
},{
    question: "What I am looking for?",
    answer: "I would love to have a first junior experience as developer"
}]*/

function AboutMe() {
    const [ open1, setOpen1 ] = useState(false)
    const [ open2, setOpen2 ] = useState(false)
    const [ open3, setOpen3 ] = useState(false)
    const [ open4, setOpen4 ] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 2000})
      }, [])



    return (
        <div className="aboutme">
            <h2 id="aboutme">HIDDEN</h2>        
            <div data-aos="fade-up" className="aboutme__title" >
                <h1>ABOUT ME</h1>
            </div>
            <div data-aos="fade-up" className="aboutme__info">
                <button onClick={ (e) => setOpen1(!open1)} className="question">What are my qualifications?</button>
                        { open1 && <h4 className="answer">I have taken certified courses in Python, Django, React JS and Node JS</h4>}                       

                <button onClick={ (e) => setOpen2(!open2)} className="question">Which is my developer experience?</button>
                        { open2 && <h4 className="answer">I have worked freelance developing some landing websites while I continue learning through cloning. I am also a React JS tutor!</h4>} 

                <button onClick={ (e) => setOpen3(!open3)} className="question">What can I do for you?</button>
                        { open3 && <h4 className="answer">I am ready to sketch and develop your website!</h4>}   

                <button onClick={ (e) => setOpen4(!open4)} className="question">What I am looking for?</button>
                        { open4 && <h4 className="answer">I am looking for a first junior experience as developer</h4>}                       
            </div>

        </div>
    )
}

export default AboutMe
