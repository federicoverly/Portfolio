import React, { useState, useEffect } from "react";
import "./AboutMe.css";
import Aos from "aos";
import "aos/dist/aos.css";
import FingerprintIcon from "@material-ui/icons/Fingerprint";

function AboutMe() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="aboutme">
      <h2 id="aboutme">HIDDEN</h2>
      <div data-aos="fade-up" className="aboutme__title">
        <h1>ABOUT ME</h1>
      </div>
      <div data-aos="fade-up" className="aboutme__info">
        <button onClick={(e) => setOpen1(!open1)} className="question">
          What are my qualifications?
        </button>
        {open1 && (
          <h4 className="answer">
            I have taken certified courses in React JS, React Native, Python,
            Django, and Node JS
          </h4>
        )}

        <button onClick={(e) => setOpen2(!open2)} className="question">
          Which is my developer experience?
        </button>
        {open2 && (
          <h4 className="answer">
            I have worked for the Ianu team as a freelance front-end developer
            both for React and React Native. I am also a React JS coordinator
            and tutor at CoderHouse as well. And yes, I have developed websites!
          </h4>
        )}

        <button onClick={(e) => setOpen3(!open3)} className="question">
          What can I do for you?
        </button>
        {open3 && (
          <h4 className="answer">
            If you are looking to develope a website or a phone app, well that's
            me!
          </h4>
        )}

        <button onClick={(e) => setOpen4(!open4)} className="question">
          What I am looking for?
        </button>
        {open4 && (
          <h4 className="answer">
            I am looking for a first full-time front-end developer experience
          </h4>
        )}
      </div>
      <div data-aos="fade-up" className="aboutme__more">
        <h4 className="answer">Check my bio!</h4>
        <span>
          <a href="https://drive.google.com/file/d/1-nGG0JOmzSF5Lz5Sg1Ky_HNGU6jpZFOf/view?usp=sharing">
            <FingerprintIcon />
          </a>
        </span>
      </div>
    </div>
  );
}

export default AboutMe;
