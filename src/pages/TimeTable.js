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
            <div className="groovyFont  text-5xl text-center pt-16 mb-6">TIME TABLE</div>
            
            {timeTable.map((timeTable)=>{
                return (<>
                        {timeTable.blue ? 
                        <div key={timeTable.id}
                            className={`textFont flex justify-between w-5/12 bg-2E3D86 text-white rounded-2xl px-3 py-1 my-5 text-sm
                            ${timeTable.id % 2 == 0 ? 'ml-20' : 'ml-36'}`}>
                            <TimeTableElement time={timeTable.time} schedule={timeTable.schedule}/>
                        </div> :
                        <div key={timeTable.id} className='textFont flex justify-between w-9/12 mx-auto bg-white text-black rounded-2xl px-4 py-2 my-5'>
                            <TimeTableElement time={timeTable.time} schedule={timeTable.schedule}/>
                        </div>
                    }</>)
                    })}

            <FixedBottom />
        </div>
    );
};

export default TimeTable;