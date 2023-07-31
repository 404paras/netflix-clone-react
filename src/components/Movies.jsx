import React from "react";
import Navbar from "../components/Navbar";
import Movie_list from "./MovieList";
import Banner from '../components/Banner'
import Footer from "./Footer";

const Shows = ({ api_key, base_url }) => {

  const banner  = `${base_url}trending/movie/day?api_key=${api_key}`
  console.log(banner)

  const endpoints = [
   
    {
      name: "Action Movies",
      path: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=28`,
    },
    {
        name: "Top Rated Movies",
        path: `${base_url}/movie/top_rated?api_key=${api_key}&language=en-US`,
      },
    {
      name: "Comedy Movies",
      path: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=35`,
    },
    {
      name: "Horror Movies",
      path: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=27`,
    },
    {
      name: "Romance Movies",
      path: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=10749`,
    },
    {
      name: "Documentaries",
      path: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=99`,
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
