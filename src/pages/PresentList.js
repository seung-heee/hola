import React from 'react';
import FixedBottom from '../components/FixedBottom';
import BackBox from '../components/BackBox';
import { images } from '../utils/images';

const PresentList = () => {
    return (
        <div className='PresentList titleFont relative'>
            <BackBox />
            <div className="text-6xl text-center pt-16 mb-10 tracking-widest">경품 목록</div>
        
            <div className='text-2xl flex flex-col w-9/12 mx-auto relative mb-52'>
                <div className='text-start'>
                    <div>[1등]<br/>2022 IPAD<br/>10세대</div>
                </div>
                <img src={images.ipad} alt="ipad" className='w-8/12 absolute -bottom-40 -right-4'/>
            </div>

            <div className='text-2xl flex flex-col w-9/12 mx-auto relative mb-52'>
                <div className='text-end'>
                    <div>[2등]<br/>SONY 헤드폰<br/>WH-<br/>1000XMS</div>
                </div>
                <img src={images.sony} alt="ipad" className='w-8/12 absolute -bottom-44 -left-4'/>
            </div>

            <div className='text-2xl flex flex-col w-9/12 mx-auto relative mb-52'>
                <div className='text-start'>
                    <div>[3등]<br/>APPLE Watch<br/>SE 2</div>
                </div>
                <img src={images.appleWatch} alt="ipad" className='w-8/12 absolute -bottom-40 -right-4'/>
            </div>
            <FixedBottom />
        </div>
    );
};

export default PresentList;