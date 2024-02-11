import React from 'react';

const TimeTableElement = ({time, schedule}) => {
    return (
        <>  
            <div>{time}</div>
            <div>{schedule}</div>
        </>
   
    );
};

export default TimeTableElement;