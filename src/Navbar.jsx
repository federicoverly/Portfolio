import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
    const [ show, handleShow ] = useState(false)
    const [ handleHamb, setHandleHamb ] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    const handleHamburger = () => {
        setHandleHamb(!handleHamb)
    }

    const closeHamburguer = () => {
        setHandleHamb(false);
    }
  
    return (
        <div className={`navbar ${show && "navbar__full"} ${handleHamb && "navbar__hambOpen"}`}>
            
            <div className="navbar__logo">
                <Link to="header" smooth={true} duration={1000}><h1>Federico Verly</h1></Link>
            </div>
            <div className={`navbar__links ${handleHamb && "navbar__linksOpen"}`}>
                  <Link to="portfolio" smooth={true} duration={1000} onClick={closeHamburguer}><h3>PORTFOLIO</h3></Link>
                  <Link to="aboutme" smooth={true} duration={1000} onClick={closeHamburguer}><h3>ABOUT ME</h3></Link>
                  <Link to="contact" smooth={true} duration={1000} onClick={closeHamburguer}><h3>CONTACT</h3></Link>
            </div>
            <div className={`navbar__hamburger`} onClick={handleHamburger}>
                <div className={`line ${show && "navbar__hambFull"} ${handleHamb && "navbar__hambFull"}`}></div>
                <div className={`line ${show && "navbar__hambFull"} ${handleHamb && "navbar__hambFull"}`}></div>
                <div className={`line ${show && "navbar__hambFull"} ${handleHamb && "navbar__hambFull"}`}></div>
            </div>

        </div>


    )
}

export default Navbar

/*
        <AppBar className="navbar">

            <Toolbar>
            <div className="navbar__logo">
                <Link href="#header"><h1>Federico Verly</h1></Link>
            </div>
            <Hidden smDown>
            <div className="navbar__links">
                  <Link href="#space"><h3>PORTFOLIO</h3></Link>
                  <Link href="#aboutme"><h3>ABOUT ME</h3></Link>
                  <Link href="#contact"><h3>CONTACT</h3></Link>
            </div>
            </Hidden>
            <Hidden mdUp> 
               <SideDrawer Links={Links} />
            </Hidden>

          </Toolbar>
        </AppBar>
        */