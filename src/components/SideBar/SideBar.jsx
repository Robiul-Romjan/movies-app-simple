import React, { useEffect, useState } from 'react';

const SideBar = ({movieTime}) => {
    const [time, setTime] = useState(movieTime)

   useEffect(()=>{
    const getTime = localStorage.getItem("watchTime")
    setTime(getTime)
   },[movieTime]);

   const clearTime = () => {
    localStorage.clear();
    setTime(0)
   }

    return (
        <div>
            <p>Your watch time: {time}</p>
            <button onClick={clearTime}>Clear time</button>
        </div>
    );
};

export default SideBar;