import  { useState,useEffect } from 'react'

export const useFetch = (api,queryTerm='') => {
    const[data, setData]=useState([]);
    //https://api.themoviedb.org/3/movie/now_playing?api_key=5a03dc88622b97c15627277735bc28db
    const url =`https://api.themoviedb.org/3/${api}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
    console.log(url);
     useEffect(()=>{
         async function fetchMovies(){
           const response = await fetch(url);
           const data = await response.json();
           setData(data.results);
           console.log(data);

         }
         fetchMovies();
       },[url]); 
  return {data}
}
