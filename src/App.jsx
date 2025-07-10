import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="h-screen w-full bg-gray-900 flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl text-yellow-400 font-bold">
          Welcome to Movie Search
        </h1>
        <p className="text-lg mt-4 text-gray-300">
          This is a simple movie search application built with React and Vite.
        </p>
        <div className="flex text-gray-300 items-center mt-6">
          <Link
            to="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 mr-4 hover:text-yellow-400 transition-colors duration-300 hover:underline"
          >
            Vite Documentation
          </Link>
          <Link
            to="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 hover:text-yellow-400 transition-colors duration-300 hover:underline"
          >
            React Documentation
          </Link>
          <Link
            to="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 hover:text-yellow-400 hover:underline transition-colors duration-300"
          >
            Tailwind CSS Documentation
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
