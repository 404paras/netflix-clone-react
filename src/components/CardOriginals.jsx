import React from 'react'
import '../style/card-original.css'
import { Link } from 'react-router-dom';
const CardOriginals = ({img,overview,name,rating,id,release_date}) => {



    const imageUrl = `https://image.tmdb.org/t/p/w780/${img}`;
if(img===null || name===null){return null}

  return (
   <Link
  to={`/details/${id}/${encodeURIComponent(name)}/${img}/${encodeURIComponent(overview)}/${release_date}/${rating}`}
  className="card-original" 
  >
    
   <img src={imageUrl} alt="" />
   
  
   </Link>)
}

export default CardOriginals