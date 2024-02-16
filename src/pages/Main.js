import React from 'react';
import { Link } from 'react-router-dom';
import BgAnimation from '../components/BgAnimation';
import FixedBottom from '../components/FixedBottom';
import ScrollTop from '../utils/ScrollTop';
import '../css/nav.css';

const Main = () => {
  return (
    <div className='mainContainer h-screen relative text-center'>
      <BgAnimation text="HOLA! HOLA!"/>
      <div className="text-center pt-20 mb-6 flex items-center justify-center">
        <img className='mainBoom z-10 absolute left-1/2 -translate-x-1/2 translate-y-[5%]' 
             src="assets/images/boomCloud.png" 
             alt="폭발구름" 
             style={{width:'350px'}}/>
        <div className="mainHeader relative z-20">
          <div className="mainSubtitle text-3xl subGroovyFont">
            2024 <br />
            ORIENTATION
          </div>
          <div className="text-[#ff9100] text-8xl my-4 groovyFont">HOLA!</div>
          <div className="mainText text-3xl tracking-widest titleFont">새로운 안녕, 올라!</div>
        </div>
      </div>
      <Link to='/menu' className='navLinkItem'>
        <div className="mainContent relative text-5xl font-bold tracking-widest mt-36 z-20 titleFont w-9/12 mx-auto heartbeat">따라와~!</div>   
      </Link>
      
      <FixedBottom />
      <ScrollTop />
    </div>
  );
};

export default Main;