import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';

function Header() {

    return (
        <div className="header"  id="header">
            <div className="div header__title">
                <h1>Full Stack Developer </h1>
                
            </div>
            <div className="header__button">
                <Link to="aboutme" smooth={true} duration={1000}>
                    <button className="button">Tell me more</button>
                </Link>
            </div>
        </div>
        
    )
}

export default Header
