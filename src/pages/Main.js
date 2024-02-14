import React from 'react';
import { Link } from 'react-router-dom';
import BgAnimation from '../components/BgAnimation';
import FixedBottom from '../components/FixedBottom';
  
const Main = () => {
  return (
    <div className='mainContainer text-center titleFont'>
      <BgAnimation text="HOLA! HOLA!"/>
      <div className="mainWrap absolute top-20 left-0 right-0">
        <img className='mainBoom z-10' src="img/mainBoom.png" alt="제목 뒷배경" style={{width:'320px'}}/>
        <div className="mainHeader relative z-20">
          <div className="mainSubtitle text-2xl">
            2024 <br />
            ORIENTATION
          </div>
          <div className="mainTitle text-7xl my-4">HOLA!</div>
          <div className="mainText text-3xl tracking-widest">새로운 안녕, 올라!</div>
        </div>
        <Link to='/nav' className='navLinkItem'>
          <div className="mainContent relative text-5xl tracking-widest mt-36 z-20">따라와~!</div>   
        </Link>
      </div>
      <FixedBottom />
    </div>
  );
};

export default Main;