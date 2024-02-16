import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../css/nav.css';
import BackBox from "./BackBox";
import FixedBottom from "./FixedBottom";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false); // 스크롤 상태를 추적하기 위한 상태 변수

    useEffect(() => {
        // 스크롤 이벤트 핸들러를 추가
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setScrolling(true); // 스크롤 위치가 30px 이상이면 scrolling 상태를 true로 설정
            } else {
                setScrolling(false); // 그 외의 경우에는 scrolling 상태를 false로 설정
            }
        };

        // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 추가
        window.addEventListener("scroll", handleScroll);

        // 언마운트될 때 스크롤 이벤트 리스너 제거
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Navbar의 클래스 이름을 동적으로 설정하고 scrolling 상태에 따라 배경색 클래스를 추가
    const navbg = `Nav fixed top-0 flex justify-between items-center px-5 py-3 ${isOpen ? 'z-40' : 'z-30'} ${scrolling ? 'nav-bg-scrolled' : ''}`;

  return (
    <>
      <div className={ navbg }>
        <ul className='container flex justify-between'>
          <li className={`${isOpen ? 'hidden' : 'z-20'} text-2xl`}>
            <Link to="/" onClick={() => {
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
              });
            }}>
              <div className="moveHome titleShadowXX text-xl">HOLA!</div>
            </Link>
          </li>
          <div></div>
          <li className={`off-screen-menu ${isOpen ? 'open fixed slideInDown ' : 'hidden'} flex justify-center items-center tracking-[1px]`}>
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
      </div>
    </ >
  )
}

export default MainNav;

const ShowNav = ({ setIsOpen }) => {
  const closeNav = () => {
    setIsOpen(false)
  }
  return (  
    <div className="ShowNav relative w-full titleShadowXX z-100">
      <ul className="min-h-screen flex flex-col items-center justify-center gap-y-2 text-3xl">
        <BackBox />
          <div className="subGroovyFont mt-5 text-3xl text-center z-20">
            2024 <br />
            ORIENTATION
          </div>
        <Link to="/timetable" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            <img src="assets/images/nav/nav1.png" alt="타임테이블" style={{width:'250px'}} />
          </li>
        </Link>
        <Link to="/presentList" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            <img src="assets/images/nav/nav2.png" alt="경품추첨" style={{width:'260px'}} /> 
          </li>
        </Link>
        <Link to="/funHola" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn mt-1">
            <img src="assets/images/nav/nav3.png" alt="흥이 HOLA!" style={{width:'250px'}} />
          </li>
        </Link>
        <Link to="/hotHola" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn -mt-2">
            <img src="assets/images/nav/nav4.png" alt="달아 HOLA!" style={{width:'250px'}} />
          </li>
        </Link>
        <Link to="/mainSong" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            <img src="assets/images/nav/nav5.png" alt="주제곡 안내" style={{width:'280px'}} />
          </li>
        </Link>
        <Link to="/snsEvent" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn my-1">
            <img src="assets/images/nav/nav6.png" alt="SNS 이벤트" style={{width:'235px'}} />
          </li>
        </Link>
        <Link to="/about" onClick={closeNav} className="navLinkItem">
          <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn">
            <img src="assets/images/nav/nav7.png" alt="만든이들" style={{width:'225px'}} />
          </li>
        </Link>
        <FixedBottom/>
      </ul>
    </div>
  )
};