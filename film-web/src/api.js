import axios from "axios"

const api = process.env.REACT_APP_APIKEY
const baseurl = process.env.REACT_APP_BASEURL

export const getMovieList = async() =>{
const movie = await axios.get(`${baseurl}/movie/popular?page=1&api_key=${api}`)
return movie.data.results
}


export const searchMovie = async(q)=>{
    const search= await  axios.get(`${baseurl}/search/movie?query=${q}&page=1&&api_key=${api}`)
    
    return search.data
}
 