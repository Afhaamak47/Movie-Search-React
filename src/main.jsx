import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Headers,
  Footers,
  Movies,
  Movieinfo,
  App,
  About,
  Layout,
  movieLoader,
  NotFound,
  NotFoundLoader,
} from "./components/Allinone.js";
import {
  Router,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:id" element={<Movieinfo />} loader={movieLoader} />
      <Route path="*" element={<NotFound />} loader={NotFoundLoader} />
    </Route>
  )
);
import React from "react";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
