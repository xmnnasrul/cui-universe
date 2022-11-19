import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";

const App = () => {
  const [popularMovie, setPopularMovie] = useState({});

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovie(result);
    });
  }, []);

const popularMovieList = () => {
  return popularMovie.map((movie, i) => {
    return(
        <div className="Movie-wrapper" key={i}>
            <div className="Movie-title">{movie.title}</div>
            <img className="Movie-img"  src={`${process.env.REACT_APP_BASEIMGURL}/movie.poster_path`} alt="img"/>
            <div className="Movie-date">release: {movie.release_date}</div>
            <div className="Movie-rating">{movie.vote_everage}</div>
          </div>
    )
  })
}

  const search = async (q) => {
    if (q.lengh>3) {
      const query = await searchMovie(q)
      setPopularMovie(query.results)
    }

  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie</h1>
        <input className="Movie-search" placeholder="search" onChange={({ target }) => search(target.value)} />
        <div className="Movie-container">
          <popularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
