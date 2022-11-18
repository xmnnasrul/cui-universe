import './App.css';
import {getMovieList, searchMovie} from "./api"
const  App = ()=>{
  const search = (q) => {
    console.log({ q })
  }
  useEffect(() => {
    getMovieList()
  },[])
  
  return (
    <div className="App" >
      <header className="App-header">
        <h1>Movie</h1>
        <input className="Movie-search" placeholder="search" onChange={({target})=> search(target.value )} />
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title"></div>
            <img className="Movie-img" />
            <div className="Movie-date"></div>
            <div className="Movie-rating"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
