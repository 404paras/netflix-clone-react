import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/movie-list.css'

import Card from './Card.jsx'

const Movie_list = ({ movie ,title}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(movie);

        setList(data.results);
      } catch (error) {
        console.error(error);
      }
    };


    fetchData();

   
   
  }, [movie,list]);


  return ( 

    <div className="movie">
    <span className="title">{title}</span>
  <div className='movie-list'>


{

    list.map((item,index)=>(


<Card 

key={index}
id = {item.id}
name = {item.name||item.title||'No Title'}
img = {item.poster_path}
overview = {item.overview}
release_date = {item.release_date}
rating = {item.vote_average}
/>
    ))
}

  </div>
  </div>
  )
};

export default Movie_list;


