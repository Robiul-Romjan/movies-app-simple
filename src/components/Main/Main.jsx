import React, { useState } from 'react';
import Movies from '../Movies/Movies';
import SideBar from '../SideBar/SideBar';

const Main = () => {

    const [movieTime, setMovieTime] = useState(0);
    

    const handleBookMark = (time) => {
      const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"))
      if(previousWatchTime){
        const allWatchTime = previousWatchTime + time;
        localStorage.setItem("watchTime", allWatchTime);
        setMovieTime(allWatchTime);
      }
      else{
        localStorage.setItem("watchTime", time);
        setMovieTime(time)
      }
     };

   

    return (
        <div className='main container'>
            <div className="row">
                <div className="col-lg-9">
                    <Movies handleBookMark={handleBookMark} />
                </div>
                <div className="col-lg-3">
                <SideBar movieTime={movieTime} />
                </div>
            </div>
        </div>
    );
};

export default Main;