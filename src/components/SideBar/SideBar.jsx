import React, { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

const SideBar = ({ movieTime }) => {
    const [time, setTime] = useState(movieTime);
    const [breakTime, setBreakTime] = useState(0);


    useEffect(() => {
        const getTime = localStorage.getItem("watchTime")
        const getBreakTimeLC = localStorage.getItem("breakTime");
        setTime(getTime)
        setBreakTime(getBreakTimeLC);  
    }, [movieTime]);

    const clearTime = () => {
        localStorage.clear();
        setTime(0)
        setBreakTime(0)
    };

    const handleBreakTime = (breakTime) => {
       localStorage.setItem("breakTime", breakTime);
       const getBreakTimeLC = localStorage.getItem("breakTime");
       if(getBreakTimeLC){
        setBreakTime(getBreakTimeLC);
       }else{
        setBreakTime(0);
       }    
    };

    const handleComplete = () => {
        toast(time - breakTime);
    }


    return (
        <div className='sticky-top'>
            <h2 className='text-center'>My Cart</h2>
            <h5 className='text-center mt-4'>Your watch time: {time}</h5>
            <h4 className='text-center mt-4'>Add Break Time</h4>
            <div className="text-center">
                <button onClick={()=> handleBreakTime(10)} className="btn btn-primary">10</button>
                <button onClick={()=> handleBreakTime(20)} className="btn btn-primary mx-3">20</button>
                <button onClick={()=> handleBreakTime(30)} className="btn btn-primary">30</button>
                <span className="input-group-text mt-3">{breakTime} minutes</span>
            </div>
            <div className='text-center mt-5'>
                <button className='btn btn-success mx-3' onClick={handleComplete}>Complete</button>
                <button className='btn btn-danger' onClick={clearTime}>Clear All Time</button>
            </div>
        </div>
    );
};

export default SideBar;