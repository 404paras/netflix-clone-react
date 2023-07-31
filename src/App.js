import React from 'react'
import SignIn from './components/SignIn.jsx'
import People from './components/People.jsx'
import './style/app.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/home'
import Shows from './components/Shows.jsx'
import Movies from './components/Movies.jsx'
import Details from './components/Details.jsx'

import PeopleDetails from './components/PeopleDetails.jsx'

const App = () => {

const api_key = `1b9c650119691abcce35c04ca0879f75`
const base_url = `https://api.themoviedb.org/3/`

const trending = `${base_url}trending/all/week?api_key=${api_key}`

const horror = `${base_url}discover/movie?api_key=${api_key}&with_genres=27`
const Action = `${base_url}discover/movie?api_key=${api_key}&with_genres=28`
const drama = `${base_url}discover/movie?api_key=${api_key}&with_genres=18`
const animation = `${base_url}discover/movie?api_key=${api_key}&with_genres=16&with_watch_providers=netflix`
const sci_fi = `${base_url}discover/tv?api_key=${api_key}&with_genres=10765`
const toprated = `${base_url}trending/tv/week?api_key=${api_key}`
const shows = `${base_url}tv/top_rated?api_key=${api_key}&language=en-US&page=1`
const originals = `${base_url}discover/tv?api_key=${api_key}&with_networks=213/discover/tv?api_key=${api_key}&with_networks=213`
const banner  = `${base_url}/trending/all/day?api_key=${api_key}`

  return (
    
    <Router>
    
   

    <Routes>
<Route path='/' element={<SignIn />}/>

      <Route path='/home' element={<Home trending={trending}
      horror={horror}
      Action={Action}
      drama = {drama}
      animation = {animation}
      sci_fi = {sci_fi}
      toprated = {toprated}
      shows={shows}
      originals = {originals}
      banner = {banner}
      
      />}/>
<Route path='/details/:id/:name//:img/:overview/:release_date/:rating' element = {<Details/>} />
      <Route path='/shows' element = {<Shows api_key = {api_key} base_url={base_url}/>}/>
<Route path='/movies' element = {<Movies api_key = {api_key} base_url={base_url}/>}/>
<Route path='/people' element  = {<People api_key = {api_key} base_url={base_url}/>}/>

<Route path='/people/info/:id/:name/:biography/:img/:bday/:gender/:place_of_birth/:movies' element={<PeopleDetails/>}/> 

</Routes>

    </Router>
  )
}

export default App