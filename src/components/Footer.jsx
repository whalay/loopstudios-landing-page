import React from 'react';
import logo from '../assets/images/logo.svg';
import instagram from '../assets/images/icon-instagram.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import facebook from '../assets/images/icon-facebook.svg';

const Footer = () => {
    return (
        <div className='bg-black text-white p-10 md:px-24 md:flex justify-between text-center'>
            <div className='space-y-5  '>
                <img src={logo} alt="" className='mx-auto md:m-0' />
                <ul className="md:flex md:gap-10 py-5 sm:py-0  block relative   ">
                    <li className='footer-div'>
                        <a href="/">About</a>
                    </li>
                    <li className='pt-10 md:pt-0 footer-div'>
                        <a href="/">Careers</a>
                    </li>
                    <li className='pt-10 md:pt-0 footer-div'>
                        <a href="/">Events</a>
                    </li>
                    <li className='pt-10 md:pt-0 footer-div'>
                        <a href="/">Products</a>
                    </li>
                    <li className='pt-10 md:pt-0 footer-div'>
                        <a href="/">Support</a>
                    </li>
                </ul>
            </div>
            <div className='space-y-5 mt-5'>
                <div className='flex justify-center md:justify-end gap-5 relative '>
                    <div className='footer-div'>
                        <img src={twitter} alt="" />
                    </div>
                    <div className='footer-div'>
                        <img src={instagram} alt=""  />
                    </div>

                    <div className='footer-div'>
                        <img src={pinterest} alt="" />
                    </div>
                    <div  className='footer-div'>
                        <img src={facebook} alt=""/>
                    </div>
                </div>
                <p>© 2021 Loopstudios. All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer