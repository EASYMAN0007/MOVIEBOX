import FeaturedMovie from "../components/FeaturedMovie";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedMovie title={"Featured Movie"} />
      <FeaturedMovie title={"New Arrival"} />
    </div>
  );
};

export default Home;
