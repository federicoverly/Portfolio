import React, { useEffect } from 'react';
import './Portfolio.css';

// Animation
import Aos from 'aos';
import 'aos/dist/aos.css';


// Videos import
import facebook from './1._Facebook_Clone.mp4';
import ecommerce from './2._Ecommerce.mp4';
import instagram from './3._Instagram_Clone.mp4';
import netflix from './4._Netflix_Clone.mp4';
import spotify from './5._Spotify_Clone.mp4';
import discord from './6._Discord_Clone.mp4';
import landing1 from './7._Del_Arroyo.mp4';
import tinder from './8._Tinder_Clone.mp4'
import twitch from './9._Twitch_Clone.mp4';
import whatsapp from './10._Whatsapp_Clone.mp4'
import landing2 from './11._Restaurant.mp4';
import blog from './12._Blog.mp4';


const videos = [ {
    title: "Facebook Clone",
    video: facebook,
}, {
    title: "Ecommerce",
    video: ecommerce,
}, {
    title: "Instagram Clone",
    video: instagram,
},{
    title: "Netflix Clone",
    video: netflix,
}, {
    title: "Spotify Clone",
    video: spotify,
}, {
    title: "Discord Clone",
    video: discord,
}, {
    title: "Tinder Clone",
    video: tinder,
}, {
    title: "Twitch Clone",
    video: twitch,
}, {
    title: "Whatsapp Clone",
    video: whatsapp,
}, {
    title: "Blog",
    video: blog,
}, {
    title: "Landing Example 1",
    video: landing1,
}, {
    title: "Landing Example 2",
    video: landing2,
}]


function Portfolio() {
    useEffect(() => {
        Aos.init({ duration: 2000})
      }, [])

    return (
        <>
        <div className="portfolio"  >   
        <h2  id="portfolio">HIDDEN</h2>        
            <div data-aos="fade-up" className="portfolio__title" >
                <h1>PORTFOLIO</h1>
            </div>
            <div  data-aos="fade-up" className="portfolio__videos">
                {videos.map( video => (
                    <div className="video">
                        <h3>{video.title}</h3>
                        <video src={video.video} width="500" height="250" controls="controls" autoplay="true" className="video__small"/>
                    </div>
                    ))}
                
            </div>
        </div>
        </>
    )
}

export default Portfolio
