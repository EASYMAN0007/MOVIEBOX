import imdbLogo from "../assets/imdb.svg";
import tomato from "../assets/tomato.svg";
const MovieCard = ({movie}) => {
  return (
    <div
      style={{
        height: "513px",
        width: "250px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} style={{ height: "370px", width: "100%", objectFit:'cover' }} />
      
      <p>{movie.country}, {movie.releaseYear}</p>
      <h4>{movie.title}</h4>
      {/* Ratings */}
      <div className="ratings">
        {/* Imdb rating */}
        <div className="imdb">
          <img src={imdbLogo} alt="imdb logo" />
          <span>{movie.imdbRating} / 100</span>
        </div>
        {/* tomato rating */}
        <div className="tomato">
          <img src={tomato} />
          <span>{movie.tomatoRating}%</span>
        </div>
      </div>
      <p>Animation, Action, Adventure</p>
    </div>
  );
};

export default MovieCard;
