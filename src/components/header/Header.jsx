import React from 'react';
import "./Header.css"
import CTA from './CTA.jsx';
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Priyankshu Roy</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header