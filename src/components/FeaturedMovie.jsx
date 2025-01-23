import { PiGreaterThan } from "react-icons/pi";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

const FeaturedMovie = ({ title }) => {
  const [ratedMovies, setRatedMovies] = useState(null);
  const token = import.meta.env.VITE_API_TOKEN
  const headers = { Authorization: `Bearer ${token}` };
  const getRatedMovies = async()=>{
    try {
      const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated", {headers})
      console.log(response)
    } catch (error) {
      console.log("Error fetching movies: ", error);
      
    }
  }

  useEffect(() => {
    getRatedMovies();
  }, []);

  return (
    <div
      style={{
        paddingInline: "96px",
      }}
    >
      {/* Heading */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          color: "black",
        }}
      >
        <h4>{title}</h4>
        <div>
          <span>See More</span>
          <PiGreaterThan />
        </div>
      </div>
      {/* Movies */}
      <div style={{ display: "flex", columnGap: "24px", flexWrap: "wrap" }}>
        {ratedMovies &&
          ratedMovies.map((value, index) => {
            return <MovieCard key={index} movie={value} />;
          })}
      </div>
    </div>
  );
};

export default FeaturedMovie;
