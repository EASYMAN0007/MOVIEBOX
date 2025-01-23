import Topnav from "./Topnav";
import imdbLogo from "../assets/imdb.svg";
import tomato from "../assets/tomato.svg";
import Button from "./Button";
import { MdOutlinePlayCircle } from "react-icons/md";

const Hero = () => {
  return (
    <div className="hero-cont">
      <Topnav />
      <main>
        {/* Movie Details */}
        <div className="hero-details">
          <h1>John Wick 3 : Parabellum</h1>
          {/* Ratingss */}
          <div className="ratings">
            {/* Imdb rating */}
            <div className="imdb">
              <img src={imdbLogo} alt="imdb logo" />
              <span>86.0 / 100</span>
            </div>
            {/* tomato rating */}
            <div className="tomato">
              <img src={tomato} />
              <span>97.0%</span>
            </div>
          </div>

          {/* movie desc */}
          <p className="desc">
            John Wick is on the run after killing a member of the international
            assassins&apos; guild, and with a $14 million price tag on his head,
            he is the target of hit men and women everywhere.
          </p>
          <Button className="trailer-btn">
            <MdOutlinePlayCircle className="play-icon" />
            <span>Watch trailer</span>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Hero;
