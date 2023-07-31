import React from "react";
import Navbar from "../components/Navbar";
import Movie_list from "./MovieList";
import Banner from '../components/Banner'
import Footer from './Footer'

const Shows = ({ api_key, base_url }) => {

  const banner  = `${base_url}trending/tv/day?api_key=${api_key}`
  console.log(banner)

  const endpoints = [
    {
      name: "Popular Shows",
      path: `${base_url}/tv/popular?api_key=${api_key}&language=en-US&page=1`,
    },
    {
      name: "Top Rated Shows",
      path: `${base_url}/tv/top_rated?api_key=${api_key}&language=en-US&page=1`,
    },
    {
      name: "Shows On The Air",
      path: `${base_url}/tv/on_the_air?api_key=${api_key}&language=en-US&page=1`,
    },
   
  ];

  return (
    <div className="shows">
      <Navbar />
      <Banner banner={banner}/>
      {endpoints.map((endpoint) => (
        <Movie_list
          key={endpoint.name}
          movie={endpoint.path}
          title={endpoint.name}
        />
      ))}
      <Footer/>
    </div>
  );
};

export default Shows;
