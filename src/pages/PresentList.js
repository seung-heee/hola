import React from 'react';
import FixedBottom from '../components/FixedBottom';
import BackBox from '../components/BackBox';

const PresentList = () => {
    return (
        <div className='PresentList'>
            <BackBox />
            <div className="titleFont  text-5xl text-center pt-16 mb-6">경품 목록</div>
            
            <FixedBottom />
        </div>
    );
};

export default PresentList;