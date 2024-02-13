import React from 'react';
import FixedBottom from '../components/FixedBottom';
import { images } from '../utils/images';

const SnsEvent = () => {
    return (
        <div className='SnsEvent relative titleShadowXX'>
            <div className="titleFont text-6xl text-center pt-16 mb-6">SNS 이벤트</div>

            <div className='titleFont eventBox text-xl text-center w-10/12 mx-auto break-keep orange'>
                릴스, 필터 이벤트를 통해서 각 이벤트 당 <span className='text-white'>학식쿠폰 50장</span>을 드립니다!
            </div>
            
            <div className='my-4 flex w-10/12 mx-auto justify-center items-center text-center text-lg'>
                <div className='w-6/12'><img src={images.sns1} alt="" /></div>
                <div>MZ 새내기들을 위한<br/>다함께<br/><br/> NEW:START<br/> 릴스 챌린지!</div>
            </div>

            <div className='my-4 flex flex-row-reverse w-10/12 mx-auto justify-center items-center text-center text-lg'>
                <div className='w-6/12'><img src={images.sns2} alt="" /></div>
                <div>MZ 새내기들을 위한<br/><br/>HOLA! PICTURE <br/> 이벤트!</div>
            </div>
            <FixedBottom />
        </div>
    );
};

export default SnsEvent;