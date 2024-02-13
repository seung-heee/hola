import React from 'react';
import PageTitle from '../components/PageTitle';
import FixedBottom from '../components/FixedBottom';
import '../css/subPages.css';
import timeTable from '../utils/timeTable.json'
import BackBox from '../components/BackBox';
import TimeTableElement from '../components/TimeTableElement';

const TimeTable = () => {
    return (
        <div className='TimeTable relative'>
            <BackBox />
            <PageTitle pagetitle={'TIME TABLE'} />
            {timeTable.map((timeTable)=>{
                return (
                    <div key={timeTable.id} className='flex justify-between w-10/12 mx-auto bg-white text-black rounded-2xl px-4 py-2 my-5'>
                        <TimeTableElement time={timeTable.time} schedule={timeTable.schedule}/>
                    </div>)
                    })}
            <FixedBottom />
        </div>
    );
};

export default TimeTable;