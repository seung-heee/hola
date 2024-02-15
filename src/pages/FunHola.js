import React from 'react';
import FixedBottom from '../components/FixedBottom';
import { images } from '../utils/images';
import { Link } from 'react-router-dom';
import { TfiHandPointRight } from "react-icons/tfi";
import BackBox from '../components/BackBox';
import Nav from '../components/Nav';
import '../css/animation.css';
import ScrollTop from '../utils/ScrollTop';

const FunHola = () => {
    return (
        <div className='FunHola relative titleShadowXX'>
            <Nav />
            <BackBox />
            <div className='relative z-10'>
                <div className="titleFont text-6xl text-center pt-20 mb-6 flex items-center justify-center">
                    <span className='inline-block mr-3'>흥이</span>
                    <span className='groovyFont'>HOLA!</span>
                </div>

                <div className='w-9/12 mx-auto text-xl textRixFontblue text-center break-keep'>학부(과)별 대표팀이 타오르는 열정으로
                    무대를 빛내줄 예정입니다.
                    소속 학부(과)의 우승을 위해
                    열정적으로 응원 부탁드리겠습니다.
                </div>

                <div className='my-2'>
                    <div className='flex w-10/12 justify-center items-center mx-auto tracking-wider'>
                        <div className='w-4/12'><img src={images.gold} alt='1등'/></div>
                        <div className='text-4xl'>1등 50만원</div>
                    </div>
                    <div className='flex w-10/12 justify-center items-center mx-auto tracking-wider'>
                        <div className='w-4/12'><img src={images.silver} alt='1등'/></div>
                        <div className='text-4xl'>2등 30만원</div>
                    </div>
                    <div className='flex w-10/12 justify-center items-center mx-auto tracking-wider'>
                        <div className='w-4/12'><img src={images.bronze} alt='1등'/></div>
                        <div className='text-4xl'>3등 10만원</div>
                    </div>      
                </div>

                <img src={images.goldCard} alt="goldCard" className='w-10/12 mx-auto' />

                <div className='w-11/12 mx-auto flex justify-center items-center textRixFontblue text-center my-5'>
                    <div className='break-keep'>
                        학부(과) 타임테이블은 총학생회 비상대책위원회 인스타그램 참고
                        <TfiHandPointRight className='inline-block ml-1' size={24}/>
                    </div>
                    <Link to='https://www.instagram.com/sku_bisang?igsh=MXFvMmw1ZG94NW9kMg=='className='w-5/12 heartbeat' target='_blank'><img src={images.bisang} alt="삐상이" /></Link>
                </div>
                <FixedBottom />
            </div>
            <ScrollTop />
        </div>
    );
};

export default FunHola;