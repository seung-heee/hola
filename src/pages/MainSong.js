import React from 'react';
import FixedBottom from '../components/FixedBottom';
import { Link } from 'react-router-dom';
import { images } from '../utils/images';
import { LuMousePointerClick } from "react-icons/lu";
import BackBox from '../components/BackBox';
import Nav from '../components/Nav';

const MainSong = () => {
    return (
        <div className='MainSong relative '>
            <Nav />
            <BackBox />
            <div className='relative z-10'>
                <div className="titleFont text-6xl text-center pt-20 mb-6 flex items-center justify-center">주제곡 안내</div>

                <Link to='https://www.youtube.com/watch?v=O53n_scAXY0' target='_blank' className='relative'>
                <div className='groovyFontXX text-4xl mx-auto text-center mt-5'>NEW : <span className='orange'>START</span></div>
                <LuMousePointerClick size={35} className='absolute right-10'/>
                <img src={images.album} alt="newStart" className='w-10/12 mx-auto mb-5'/>
                </Link>

                <div className='titleShadowXX w-9/12 mx-auto mt-5 mb-8'>
                    <div className='text-lg'><span className='orange mr-4'>Produced by.</span><span>강선규, JKLR</span></div>
                    <div className='text-lg'><span className='orange mr-4'>작사:</span><span>JKLR</span></div>
                    <div className='text-lg'><span className='orange mr-4'>작곡:</span><span>K4nji, JKLR</span></div>
                    <div className='text-lg'><span className='orange mr-4'>편곡:</span><span>K4nji</span></div>
                    <div className='text-lg'><span className='orange mr-4'>MixIng & Mastering:</span><span>강선규</span></div>
                </div>
                <FixedBottom />
            </div>
        </div>
    );
};

export default MainSong;