import { Link } from "react-router-dom";
import { HowWeWorkList } from "../../Utils/Constant";
import { FaCheckCircle } from "react-icons/fa";

const HowWeWork = () => {
  return (
    <section className="flex flex-col max-w-[1080px] p-4 gap-4 mb-2">
      <h1 className="text-purple-900 text-center lg:text-[60px] md:text-[40px] text-[45px] font-semibold leading-tight mt-10">
        How we function?
      </h1>
      <h5 className="text-orange-500 text-center lg:text-[56px] md:text-[36px] text-[42px] font-[700] leading-tight">
        There is a Solid Science Behind Building the <span className="text-purple-900">&apos;How to Learn&apos;</span>
        Capability
      </h5>
      <p className="lg:text-[20px] md:text-[18px] text-justify text-[20px] mb-10 font-medium flex flex-col justify-center items-center">
        Scientific research says that ‘&apos;How to Learn&apos;’ is a
        metacognitive skill that subconsciously takes shape on top of an
        interconnected web of individual cognitive skills shown below:
      </p>
      <ul className="min-h-60 flex flex-col mx-auto">
        {HowWeWorkList.map((item) => {
          const { id, title } = item;
          return (
            <li
              key={id}
              className="lg:text-[20px] md:text-[18px] text-[20px] font-medium mb-2"
            >
              <FaCheckCircle className="text-orange-600 text-3xl inline" />{" "}
              {title}
            </li>
          );
        })}
      </ul>
      <p className="lg:text-[20px] md:text-[18px] text-justify text-[20px] mb-10 font-medium flex flex-col justify-center items-center">
        Our children must engage in activities that cultivate these cognitive
        skills which in turn generates new and strengthens existing neural
        pathways which is crucial for learning.
      </p>
      <Link
        to="/contact"
        className="bg-orange-500 w-60 mx-auto rounded-full shadow-md p-4 text-lg text-white text-center font-bold hover:bg-orange-400 transition md:my-0 my-4"
      >
        Know more!!
      </Link>
    </section>
  );
};

export default HowWeWork;
