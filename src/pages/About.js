import React from 'react';
import FixedBottom from '../components/FixedBottom';
import Nav from '../components/Nav';
import BackBox from '../components/BackBox';

const About = () => {
    return (
        <>
            <Nav />
            <div className='About relative'>
                <BackBox />
                <div className='relative z-10'>
                <div className="titleFont text-6xl text-center pt-20 mb-6">만든이들</div>
           
                </div>
            </div>
        </>
    );
};

export default About;