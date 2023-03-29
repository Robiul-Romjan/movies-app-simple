import React, { useEffect, useState } from 'react';

const Movie = ({movie, handleBookMark}) => {
    const {poster, movieName, description, watchTime, imdbRating} = movie;

       
    return (
        <div className='col-lg-4'>
            <div className="card mb-3 p-3">
              <img className='w-75 mx-auto' src={poster} alt="" />
              <div className="movie-details">
                <h4>{movieName}</h4>
                <p>{description}</p>
                <div className="rating d-flex justify-content-between">
                    <p>Watch Time: {watchTime} </p>
                    <p>Rating: {imdbRating} </p>
                </div>
              </div>
              <button onClick={()=> handleBookMark(watchTime)} className='btn btn-success w-100'>Book Now</button>
            </div>
        </div>
    );
};

export default Movie;