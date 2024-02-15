import PageTitle from "../components/PageTitle";
import { images } from '../utils/images';
import FixedBottom from '../components/FixedBottom';
import Nav from '../components/Nav';
import BackBox from '../components/BackBox';
import Lottie from "lottie-react";
import loadingLottie from "../utils/handshake.json";
import LikelionPeople from './../components/LikelionPeople';
import ElectionCommission from './../components/ElectionCommission';

const About = () => {
  return (
    <div className="About relative textFont">
      <Nav/>
      <BackBox />
      <div className="SASFont relative flex flex-col items-center justify-center text-center z-70">
        <div className="titleFont text-[54px] text-center pt-20 mb-4 flex items-center justify-center tracking-widest">만든이들</div>
        <div className="w-10/12 mx-auto flex justify-evenly">
        <div className="flex flex-col items-center">
            <div className="w-24 h-24 pt-2 items-center" ><img src={images.likelionLogo} alt="멋사로고" className="p-2" /></div>
            <p className="mt-2 -mb-1">성결대학교</p>
            <p>멋쟁이사자처럼</p>
          </div>
          <Lottie className='w-3/12' animationData={loadingLottie} />
          <div className="flex flex-col items-center">
            <div className="w-20 h-24" ><img src={images.councilLogo} alt="비대위" /></div>
            <p className="mt-2 -mb-1">총학생회</p>
            <p>비상대책위원회</p>
          </div>
        </div>
        <div className="text-[13px] tracking-widest pt-5 my-5">
          성결대학교 <span className="text-red-400">총학생회 비상대책위원회</span>에서 신입생<br />
          오리엔테이션을 기획하였습니다. 성결대학교 <br />
          <span className="text-blue-500">멋쟁이사자처럼</span>에서 웹사이트를 제작하였습니다.
        </div>
        <LikelionPeople />
        <ElectionCommission />
        <FixedBottom />
      </div>
    </div>
  )
}

export default About;