import React from "react";
import { Link, NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="flex container mx-auto p-4">
        <ul className="flex space-x-4">
          <li className="text-lg ">
            <NavLink
              to="/"
              exact
              className={({ isActive }) =>
                isActive ? "font-bold underline text-yellow-400" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "font-bold underline text-yellow-400" : "text-white"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? "font-bold underline text-yellow-400" : "text-white"
              }
            >
              Movies
            </NavLink>
          </li>
        </ul>
        <ul className="flex text-center space-x-4 float-right ml-auto">
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "font-bold underline text-yellow-400" : "text-white"
              }
            >
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Login"
              className={({ isActive }) =>
                isActive ? "font-bold underline text-yellow-400" : "text-white"
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
