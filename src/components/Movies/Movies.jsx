import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';

const Movies = ({handleBookMark}) => {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then((res)=> res.json())
        .then((data)=> setMovies(data))
    }, []);

  
    return (
        <div className='row'>
            {
                movies.map(movie => <Movie movie={movie} key={movie.movieName} handleBookMark={handleBookMark} />)
            }
        </div>
    );
};

export default Movies;