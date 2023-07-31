import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import '../style/netflix-originals.css'
import CardOriginals from '../components/CardOriginals.jsx'


const NetflixOriginal = ({movie,title}) => {

const [list,setList] = useState([])
useEffect(()=>{

const fetchData = async() =>{

const {data} = await axios.get(movie);
setList(data.results)

}


fetchData();


},[movie])




  return (
    <div className="movie">
    <span className="title" >{title}</span>
  <div className='movie-list'>


{

    list.map((item,index)=>(


<CardOriginals
key={index}
id = {item.id}
name = {item.name||item.title||'No Title'}
img = {item.poster_path}
overview = {item.overview}
rating={item.rating||'NA'}
release_date = {item.release_date||'No Information'}
/>
    ))
}

  </div>
  </div>
  )
}

export default NetflixOriginal

