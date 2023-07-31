import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'
import '../style/details.css'
import Footer from './Footer';

const DetailsPage = () => {
  const { id, name, img, overview, release_date, rating } = useParams();
  console.log(img,overview,name,rating,id,release_date)

  const img_url = `https://image.tmdb.org/t/p/original/${img}`
console.log(id)
  return (
    <div className='details'>
    <Navbar/>
  <div className="image" >
    <img src={img_url} alt="" className='details-img'/></div>
    <div className='details-info'style={{color:'white'}}>
      <h1>{name}</h1>
     <p><span>Overview : </span>{overview}</p>
      <p><span>Release Date :</span> {release_date}</p>
      <p><span>Rating :</span> {rating}</p>
      </div>
      <Footer/>
      </div>
  );
};

export default DetailsPage;
