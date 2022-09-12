import React, { useEffect } from "react";
import "./Portfolio.css";

// Animation
import Aos from "aos";
import "aos/dist/aos.css";
import { deploys, videos } from "./helpers/data";

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="portfolio">
        <h2 id="portfolio">HIDDEN</h2>
        <div data-aos="fade-up" className="portfolio__title">
          <h1>PORTFOLIO</h1>
        </div>
        <div data-aos="fade-up" className="portfolio__videos">
          {videos.map((video, index) => (
            <div className="video" key={index}>
              <h3>{video.title}</h3>
              <iframe
                src={video.video}
                width="500"
                height="250"
                controls="controls"
                autoPlay={false}
                className="video__small"
                title={video.title}
              />
            </div>
          ))}
        </div>
        <div data-aos="fade-up" className="portfolio__title">
          <h2>DO YOU WANT TO TRY SOME OF THEM?</h2>
        </div>
        <div data-aos="fade-up" className="portfolio__deploys">
          {deploys.map((d) => (
            <span>
              <a href={d.link}>
                <h4>{d.title}</h4>
              </a>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
