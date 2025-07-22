import React from "react";
import { AboutArticleData, WhatWeDo } from "../../Utils/Constant";
import Article from "./Article";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMain = () => {
  return (
    <section className="flex md:flex-row flex-col max-w-[1080px] p-4 md:gap-4 gap-16">
      <div className="w-full mt-8 rounded-lg flex items-center justify-center flex-col p-5">
        <h1 className="text-orange-500 text-center font-serif lg:text-[50px] md:text-[45px] text-[45px] font-bold leading-tight my-4">
          Promote self-learning, Reshape education <br />{" "}
          <span className="text-purple-950">Our Mission, Vision and Goal</span>
        </h1>
        <p className="font-serif lg:text-[16px] md:text-[14px] text-[16px] mb-10 font-medium text-center">
          With a student-centric approach , we are dedicated to delivering
          solutions that amplify your educational , driving growth and
          excellence every step of the way. Your success is our ultimte goal.
        </p>
        <div className="flex flex-wrap flex-col lg:flex-row gap-6 items-center -m-4 max-w-6xl w-full justify-between mt-6">
          {AboutArticleData.map((article) => {
            return <Article key={article.id} article={article} />;
          })}
        </div>
        <div className="flex flex-col max-w-[1080px] p-4 gap-4 mb-2 mt-5">
          <h1 className="text-purple-900 text-center lg:text-[60px] md:text-[40px] text-[45px] font-bold leading-tight mt-10">
            What we do?
          </h1>
          <p className="lg:text-[20px] md:text-[18px] text-justify text-[20px] mb-10 font-medium flex flex-col justify-center items-center">
            Promote self-learning, Reshape education
          </p>
          <ul className="min-h-60 flex flex-col mx-auto">
            {WhatWeDo.map((item) => {
              const { id, title } = item;
              return (
                <li
                  key={id}
                  className="lg:text-[20px] md:text-[18px] text-[20px] font-medium mb-2 "
                >
                  <FaCheckCircle className="text-orange-600 text-3xl inline" />{" "}
                  {title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
