import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import FlipMove from "react-flip-move";

function Results({ selectionOption }) {
  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectionOption);
      SetMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectionOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
