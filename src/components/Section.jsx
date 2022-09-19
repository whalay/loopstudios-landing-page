import React from 'react'

import interactive from '../assets/images/desktop/image-interactive.jpg';
import interactive1 from '../assets/images/mobile/image-interactive.jpg';
const Section = () => {
    return (
        <div className='bg-white flex flex-col md:flex-row font-josefins justify-center space-y-5 p-5 md:p-24 '>
            <img src={interactive} alt="" className='hidden md:block' />
            <img src={interactive1} alt="" className='md:hidden'/>

            <div className=' block md:relative  bg-white text-center h-[19rem] w- p-2 top-44 right-36   md:pl-16 md:pt-10'>
                <h2 className=' text-2xl md:text-4xl text-center py-3 uppercase '>The leader in interactive VR</h2>
                <p className=''>Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.</p>
            </div>
        </div>
    )
}

export default Section