import React, { useEffect } from "react";
import "./Portfolio.css";

// Animation
import Aos from "aos";
import "aos/dist/aos.css";

const videos = [
  {
    title: "Facebook Clone",
    video:
      "https://firebasestorage.googleapis.com/v0/b/federicoverly-56c58.appspot.com/o/1._Facebook_Clone.mp4?alt=media&token=1b84f6b0-f19e-4896-bfe3-f1fb1e410c76",
  },
  {
    title: "Ecommerce",
    video:
      "https://firebasestorage.googleapis.com/v0/b/federicoverly-56c58.appspot.com/o/2._Ecommerce.mp4?alt=media&token=601ab01d-bb8e-4840-b1d8-ab3f342d1de5",
  },
  {
    title: "Instagram Clone",
    video:
      "https://firebasestorage.googleapis.com/v0/b/federicoverly-56c58.appspot.com/o/3._Instagram_Clone.mp4?alt=media&token=692d36ca-0bd2-4b64-91a0-01cb169f7be8",
  },
  {
    title: "Netflix Clone",
    video:
      "https://firebasestorage.googleapis.com/v0/b/federicoverly-56c58.appspot.com/o/4._Netflix_Clone.mp4?alt=media&token=9a0c5a26-6a05-4290-b78c-90be368e3a80",
  },
  {
    title: "Spotify Clone",
    video:
      "https://firebasestorage.googleapis.com/v0/b/federicoverly-56c58.appspot.com/o/5._Spotify_Clone.mp4?alt=media&token=3dba37d3-3539-4849-9b69-1f33ead62556",
  },
  {
    title: "Discord Clone",
    video:
      "https://firebasestorage.googleapis.com/v0/b/federicoverly-56c58.appspot.com/o/6._Discord_Clone.mp4?alt=media&token=88a545bc-3cde-4467-92e9-2c23b7eb1724",
  },
  {
    title: "Tinder Clone",
    video:
      "https://firebasestorage.googleapis.com/v0/b/federicoverly-56c58.appspot.com/o/8._Tinder_Clone.mp4?alt=media&token=0e103ea9-7f54-459f-ab10-04c92c7cd40d",
  },
  {
    title: "Twitch Clone",
    video:
      "https://firebasestorage.googleapis.com/v0/b/federicoverly-56c58.appspot.com/o/9._Twitch_Clone.mp4?alt=media&token=cee88688-779b-4d68-bfe6-eb2ce1cedb59",
  },
  {
    title: "Whatsapp Clone",
    video:
      "https://firebasestorage.googleapis.com/v0/b/federicoverly-56c58.appspot.com/o/10._Whatsapp_Clone.mp4?alt=media&token=fc13597e-28f3-4c32-824f-1f360a72dfbf",
  },
  {
    title: "Blog",
    video:
      "https://firebasestorage.googleapis.com/v0/b/federicoverly-56c58.appspot.com/o/12._Blog.mp4?alt=media&token=54b6706e-dacb-4bb2-b971-4c81ed2a0052",
  },
  {
    title: "Landing Example 1",
    video:
      "https://firebasestorage.googleapis.com/v0/b/federicoverly-56c58.appspot.com/o/11._Restaurant.mp4?alt=media&token=12aaf3a7-cf46-4c9b-bc2e-3e9eaecadb33",
  },
  {
    title: "Landing Example 2",
    video:
      "https://firebasestorage.googleapis.com/v0/b/federicoverly-56c58.appspot.com/o/7._Del_Arroyo.mp4?alt=media&token=b2feda22-3b97-44b8-b5b1-2db7fa5ef90a",
  },
];

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
      </div>
    </>
  );
}

export default Portfolio;
