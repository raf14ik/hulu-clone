import React from "react";
import "./Nav.css";
import requests from "./requests";

function Nav({ setSelectionOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectionOption(requests.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setSelectionOption(requests.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectionOption(requests.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectionOption(requests.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectionOption(requests.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectionOption(requests.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSelectionOption(requests.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSelectionOption(requests.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={() => setSelectionOption(requests.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectionOption(requests.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectionOption(requests.fetchTV)}>Movie</h2>
    </div>
  );
}

export default Nav;
