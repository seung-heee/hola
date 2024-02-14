import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import '../css/nav.css';
import BackBox from "./BackBox";
import FixedBottom from "./FixedBottom";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="Nav flex justify-around items-center text-lg py-5 px-6 fixed top-0 z-20 left-0 right-0">
      <ul className='container'>
        {location.pathname !== '/' &&
          <>
            <li className={`${isOpen ? 'hidden' : ''} text-2xl titleFont`}><Link to='/' className='moveHome'>HOLA!</Link></li>
          </>
        }
        <li className={`off-screen-menu ${isOpen ? 'open fixed fade-in-top ' : 'hidden'} flex justify-center items-center tracking-[1px]`}>
          {isOpen && (
            <ShowNav setIsOpen={setIsOpen} />
          )}
        </li>
      </ul >


      <div className={`hamburger-menu ${isOpen ? 'active' : ''} cursor-pointer z-50 navVersion`} onClick={() => setIsOpen(!isOpen)}>
        <div className="ham-bar bar-top menugreen"></div>
        <div className="ham-bar bar-mid menugreen"></div>
        <div className="ham-bar bar-bottom menugreen"></div>
      </div>
    </div >
  )
}

export default MainNav;


const ShowNav = ({ setIsOpen }) => {
  const closeNav = () => {
    setIsOpen(false)
  }
  return (
    <div className="ShowNav relative w-full titleFont z-100">
      <ul className="min-h-screen flex flex-col items-center justify-center gap-y-4 text-3xl">
        <BackBox className='relative z-10'/>
        <Link to="/" onClick={closeNav} className="navLinkItem z-20">
          <div className="NavTitle mb-2 text-5xl">HOLA!</div>
        </Link>
        <Link to="/timetable" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            타임테이블
          </li>
        </Link>
        <Link to="/presentList" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            경품 목록
          </li>
        </Link>
        <Link to="/stageProgram" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            무대프로그램
          </li>
        </Link>
        <Link to="/collegeRecreation" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            단과대학 레크
          </li>
        </Link>
        <Link to="/themesong" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            주제곡 듣기
          </li>
        </Link>
        <Link to="/snsEvent" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            SNS이벤트
          </li>
        </Link>
        <Link to="/about" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            만든이들
          </li>
        </Link>
        <FixedBottom/>
      </ul>
    </div>
  )
}