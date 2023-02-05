import React, { useState, useEffect } from "react";
import instance from "../baseUrl";
import "./Row.css";

function Row({isLargeRow, title, fetchUrl }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  //hold movies state

  const [movies, setMovies] = useState([]);
  async function fetchData() {
    const result = await instance.get(fetchUrl);
    setMovies(result.data.results);
  }
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(movies);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="movies">
        {movies && movies.map((movie) => (
          <img key={movie.id}
            className={`movie ${isLargeRow && "largerow"}`}
            src={`${base_url}${isLargeRow?movie.poster_path: movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
