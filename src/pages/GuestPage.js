import React from 'react';
import Nav from '../components/Nav';
import FixedBottom from './../components/FixedBottom';
import BackBox from './../components/BackBox';
import PageTitle from './../components/PageTitle';
import { images } from '../utils/images';
import ScrollTop from '../utils/ScrollTop';

const GuestPage = () => {
    return (
      <>
        <Nav />
        <div className='GuestPage relative'>
        <BackBox />
        <div className='relative z-10'>
            <div className="groovyFont text-6xl text-center pt-20 mb-6">Secret Guest</div>
            
            <div className='subtitleFont flex flex-col w-10/12 mx-auto text-center text-xl break-keep'>
              <div className='guestText'>성결대학교 신입생 여러분을 위한 시크릿 게스트의 무대!!</div>
              <div className='w-6/12 mx-auto slide-in-right'><img src={images.guest1} alt="guest1" /></div>
              <div className='guestText1'>실루엣을 보고 누구인지 맞춰보세요!</div>
              <div className='w-6/12 mx-auto slide-in-left '><img src={images.guest2} alt="guest2" /></div>
            </div>
            <FixedBottom />
            </div>
        </div>
        <ScrollTop />
        </>
    );
};

export default GuestPage;