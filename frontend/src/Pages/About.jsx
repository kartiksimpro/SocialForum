import AboutHero from "../Components/About/AboutHero";
import AboutMain from "../Components/About/AboutMain";
import AboutSlider from "../Components/About/AboutSlider";
import AboutStrengths from "../Components/About/AboutStrengths";

const About = () => {
  return (
    <section className="min-h-screen flex items-center flex-col bg-gradient-to-br from-purple-300 to-orange-200">
      <AboutHero />
      <AboutMain />
      <AboutStrengths />
      <AboutSlider />
    </section>
  );
};

export default About;
