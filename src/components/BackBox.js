import React from 'react';

const BackBox = ({color}) => {
    return (
        <div className={`${color=='black'?'BackBoxBlack':'BackBox'} absolute top-0 left-0 right-0 bottom-0`}></div>
    );
};

export default BackBox;