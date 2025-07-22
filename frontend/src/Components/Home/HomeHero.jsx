import { Link } from "react-router-dom";
import image from "../../assets/Illustrations/E-teaching.png";

const HomeHero = () => {
  return (
    <section className="flex md:flex-row flex-col max-w-[1080px] p-4 md:gap-4 gap-16 mb-16">
      <div className="md:w-3/5">
        <h1 className="text-purple-950 font-serif lg:text-[60px] md:text-[40px] text-[45px] font-bold leading-tight my-10">
          <span className="text-orange-500">Enhance</span> the <br />{" "}
          Self-Learning <br /> Capability in Your Child
        </h1>
        <p className="font-serif lg:text-[18px] md:text-[14px] text-[16px] mb-10 font-medium">
          Drona Learning Academy is committed to providing high-quality
          education through <strong>innovative teaching methodologies</strong>{" "}
          and <strong>personalized learning experiences</strong>. Drona Learning
          Academy offers a <strong>range of educational programs</strong>{" "}
          designed to enhance academic excellence and holistic development.
        </p>
        <Link
          to="/contact"
          className="bg-orange-500 rounded-full shadow-md p-4 text-lg text-white font-bold hover:bg-orange-400 transition md:my-0 my-4"
        >
          Contact Us Now
        </Link>
      </div>
      <div className="md:w-2/5 flex items-center justify-center">
        <img src={image} className="h-[250px] md:h-fit" alt="image" />
      </div>
    </section>
  );
};

export default HomeHero;
