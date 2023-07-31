import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'
import Banner from '../components/Banner'
import MovieList from '../components/MovieList.jsx'
import NetflixOriginal from '../components/Original.jsx'
const home = ({banner,trending,originals,toprated,shows,horror,Action,drama,animation,sci_fi}) => {
  return (
   <>
    <Navbar/>
   <Banner banner = {banner} style={{
  marginTop:'12vh'
}}/>
   <MovieList movie={trending} title={`Trending Now`}/>
   <NetflixOriginal movie = {originals} title = {`Netflix Originals`}/>

   <MovieList movie={toprated} title={`Top Rated`}/>
   <MovieList movie={shows} title={`Shows `}/>
<MovieList movie = {horror} title={`Horror Movies`}/>
<MovieList movie = {Action} title={`Action`}/>
<MovieList movie = {drama} title={`Drama`}/>
<MovieList movie = {animation} title={`Animation`}/>
<MovieList movie = {sci_fi} title={`Sci-Fi`}/>
   <Footer/>
   </>
  )
}

export default home