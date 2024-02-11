import React from 'react';

const FixedBottom = () => {
    return (
        <>
        <div className="last"></div>
        <div className='FixedBottom absolute bottom-5 text-center left-0 right-0'>
            <span className='titleFont text-2xl'>성결대학교<br/>신입생 오리엔테이션</span>
        </div>
        </>
    );
};

export default FixedBottom;