import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const People = ({api_key,base_url}) => {

 const [list,setList] = useState([])
const popular = `${base_url}person/popular?api_key=${api_key}&page=1,2`

useEffect(()=>{
  const fetchData = async()=>{
const {data} = await axios.get(popular);
setList(data.results)

  }
  fetchData();

})


  return (
    <>
    <Navbar/>
<div className="people-cards" style={{


display:'flex',
flexWrap:'wrap',
justifyContent:'space-evenly',
margin:'3rem 1rem 1rem 1rem',
}}>

{

list.map((item,index)=>(
  <PeopleCards id={item.id} key={index}
  base_url = {base_url}
  api_key = {api_key}
  movies={item.known_for}
  />
))

}
</div>
<Footer/>
    </>
  )
}

export default People
const PeopleCards = ({id,base_url,api_key,movies})=>{
  
 console.log(movies) 
const information =  `${base_url}person/${id}?api_key=${api_key}&language=en-US`
const [info,setInfo] = useState({});
useEffect(()=>{
  const fetchData = async()=>{
    const {data} = await axios.get(information)
 
    setInfo(data);
  }
  fetchData();
})  



const imageUrl = `https://image.tmdb.org/t/p/original/${info.profile_path}`;

  return (

<Link to={`info/${info.id}/${encodeURIComponent(info.name)}/${info.biography}/${encodeURIComponent(info.profile_path)}/${info.birthday}/${info.gender}/${info.place_of_birth}/${encodeURIComponent(movies)}`} className='peopleCards' style={{display:'flex',
flexDirection:'column',
justifyContent:'center',
cursor:'pointer',
alignItems: 'center',
color:'white',width:'17rem',
height:'28rem',
boxShadow: '0 4px 6px gray', // Add the box shadow here
borderRadius: '8px', // Add border radius to round the corners
marginBottom:'1rem'
,fontFamily:"sans-serif"

}}>
  
<img src={imageUrl} alt="" style={{width:'16rem',height:'18rem'}}/>
<p className="name" style={{color:'white'
,
padding:'0.5rem',
fontSize:'1.3rem'


}}>{info.name}</p>
<p style={{color:'white',
padding:'0.2rem',
fontSize:'1rem',
wordSpacing:'0.8rem',
marginTop:'-0.4rem',



}}>{`${info.known_for_department}   |   Popularity:${info.popularity}`}</p>
</Link>

  )
}