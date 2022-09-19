import React, { useState } from "react";
import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';
import Hero from "./Hero";

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const navbarHandler = () => {
    setNav((nav) => !nav);
  }
  return (
    <div className={nav ? "bg-black fixed w-full h-[80px] z-50" : 'relative bg-hero-mobile md:bg-hero-desktop bg-no-repeat h-full py-5'}>
      <div className="flex justify-between md:mx-24 px-5 py-10 text-white">
        <img src={logo} alt="" />
        <ul className="md:flex gap-10 hidden relative">
          <li className='footer-div'>
            <a href="/">About</a>
          </li>
          <li className='footer-div'>
            <a href="/">Careers</a>
          </li>
          <li className='footer-div'>
            <a href="/">Events</a>
          </li>
          <li className='footer-div'>
            <a href="/">Products</a>
          </li>
          <li className='footer-div'>
            <a href="/">Support</a>
          </li>
        </ul>


        <div onClick={navbarHandler} className="md:hidden z-10">
          {!nav ? <img src={hamburger} alt="" /> :
            <img src={close} alt="" />}
        </div>
      </div>

      <Hero />

      <ul className={!nav ? " hidden" : "  p-5 absolute bg-black h-screen w-full top-20 z-50 pt-28 space-y-7 uppercase text-2xl text-white"}>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Careers</a>
        </li>
        <li>
          <a href="/">Events</a>
        </li>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
      </ul>
    </div>

  );
};

export default Navbar;
