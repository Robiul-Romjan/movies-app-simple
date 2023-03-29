import React from 'react';
import Movies from '../Movies/Movies';
import SideBar from '../SideBar/SideBar';

const Main = () => {
    return (
        <div className='main container'>
            <div className="row">
                <div className="col-lg-8">
                    <Movies />
                </div>
                <div className="col-lg-4">
                    <SideBar />
                </div>
            </div>
        </div>
    );
};

export default Main;