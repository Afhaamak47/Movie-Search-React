import React from "react";
import { useLoaderData } from "react-router-dom";

const Movieinfo = () => {
  const { movie } = useLoaderData();
  if (!movie || movie.Response === "False") {
    return (
      <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center">
        <h1 className="text-yellow-400 text-2xl font-bold">Movie not found</h1>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center justify-center p-4">
        <div className=" w-full bg-gray-800 p-6 rounded-lg shadow-lg text-white flex flex-col float-left">
          <h1 className="text-2xl font-bold mb-4">{movie.Title}</h1>
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Rating:</strong> {movie.imdbRating}
          </p>
          <img src={movie.Poster} alt={movie.Title} height={250} width={250} />
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Language:</strong> {movie.Language}
          </p>
          <p>
            <strong>Country:</strong> {movie.Country}
          </p>
          <p>
            <strong>Awards:</strong> {movie.Awards}
          </p>
        </div>
      </div>
    </>
  );
};
export default Movieinfo;
export function movieLoader({ params }) {
  const id = params.id;
  return fetch(`https://www.omdbapi.com/?apikey=bfc397e5&i=${id}`)
    .then((res) => res.json())
    .then((data) => ({ movie: data }));
}
