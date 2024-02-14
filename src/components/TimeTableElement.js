import React from 'react';
import { LuMousePointerClick } from "react-icons/lu";
import { Link } from 'react-router-dom';


const TimeTableElement = ({time, schedule}) => {
    return (
        <>
            <div>{time}</div>
            { schedule === 'Secret Guest' ?
                <Link to='/guestPage' className='flex items-center'>
                    <div className='italic underline'>{schedule}</div>
                    <LuMousePointerClick className='ml-1'/>
                </Link> :
                <div>{schedule}</div>
            }
        </>
   
    );
};

export default TimeTableElement;