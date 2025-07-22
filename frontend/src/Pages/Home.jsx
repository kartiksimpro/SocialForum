import HomeHero from "../Components/Home/HomeHero";
import HomeTestimonials from "../Components/Home/HomeTestimonials";
import HowWeWork from "../Components/Home/HowWeWork";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center flex-col bg-gradient-to-br from-purple-300 to-orange-200">
      <HomeHero />
      <HomeTestimonials />
      <HowWeWork />
    </section>
  );
};

export default Home;
