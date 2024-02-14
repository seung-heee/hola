import React from 'react';
import { Link } from "react-router-dom";
import '../css/nav.css';
import BackBox from "../components/BackBox";
import FixedBottom from "../components/FixedBottom";
import { RiArrowGoBackFill } from "react-icons/ri";


const Menu = () => {
  const closeNav = ({ setIsOpen }) => {
    setIsOpen(false)
  }
  return (  
    <div className="ShowNav relative w-full titleShadowXX z-100">
      <ul className="min-h-screen flex flex-col items-center justify-center gap-y-2 text-3xl">
        <BackBox />
        <Link to="/" className='Nav fixed top-0 flex justify-between items-center px-5 py-3'>
            <RiArrowGoBackFill style={{color: "white", width:"28px", height:"28px"}} />
        </Link>
        <div className="subGroovyFont mt-5 text-3xl text-center z-20">
          <div>2024<br />ORIENTATION</div>
        </div>
        <Link to="/timetable" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            <img src="assets/images/nav/nav1.png" alt="타임테이블" className='w-8/12 mx-auto'/>
          </li>
        </Link>
        <Link to="/presentList" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            <img src="assets/images/nav/nav2.png" alt="경품추첨" className='w-8/12 mx-auto' /> 
          </li>
        </Link>
        <Link to="/funHola" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            <img src="assets/images/nav/nav3.png" alt="흥이 HOLA!" className='w-8/12 mx-auto' />
          </li>
        </Link>
        <Link to="/hotHola" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            <img src="assets/images/nav/nav4.png" alt="달아 HOLA!" className='w-8/12 mx-auto' />
          </li>
        </Link>
        <Link to="/mainSong" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            <img src="assets/images/nav/nav5.png" alt="주제곡 안내" className='w-8/12 mx-auto' />
          </li>
        </Link>
        <Link to="/snsEvent" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            <img src="assets/images/nav/nav6.png" alt="SNS 이벤트" className='w-8/12 mx-auto' />
          </li>
        </Link>
        <Link to="/about" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            <img src="assets/images/nav/nav7.png" alt="만든이들" className='w-8/12 mx-auto' />
          </li>
        </Link>
        <FixedBottom/>
      </ul>
    </div>
  )
};

export default Menu;