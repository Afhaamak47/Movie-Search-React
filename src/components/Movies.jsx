import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handle = () => {
    if (searchTerm.trim() === "") {
      alert("Please enter a movie name to search.");
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`https://www.omdbapi.com/?apikey=bfc397e5&s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <h1 className="text-yellow-400 text-center text-2xl font-bold mb-4 mt-3">
          Search your favorite movie
        </h1>
        <div className="flex justify-center mb-4 mt-2">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 w-1/2 rounded border text-gray-100 border-gray-300 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            onClick={handle}
            className="ml-2 p-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
          >
            Search
          </button>
        </div>
        {movies && (
          <div className="movies-container flex flex-wrap gap-4 justify-center mb-8">
            {movies.map((movie) => (
              <div
                key={movie.imdbID}
                className=" p-4 bg-gray-800 rounded text-white shadow-md w-40 text-center hover:shadow-lg transition-shadow duration-300 hover:bg-gray-700 hover:scale-105 transform cursor-pointer flex float"
              >
                <Link to={`/movies/${movie.imdbID}`}>
                  <img src={movie.Poster} alt={movie.Title} className="mb-2" />
                  <p className="text-sm">
                    {movie.Title} ({movie.Year})
                  </p>
                </Link>
              </div>
            ))}
          </div>
        )}
        {error && (
          <p className="text-red-500 text-center">
            Error fetching movies: {error.message}
          </p>
        )}
      </div>
    </>
  );
};

export default Movies;
