import React from "react";
import { AboutStrengthsData } from "../../Utils/Constant";
import StrengthCard from "./StrengthCard";

const AboutStrengths = () => {
  return (
    <section className="flex md:flex-row flex-col max-w-[1080px] p-4 md:gap-4 gap-16 mb-16">
      <div className="w-full mt-8 rounded-lg flex items-center justify-center flex-col p-5">
        <h1 className="text-orange-500 text-center font-serif lg:text-[50px] md:text-[45px] text-[45px] font-bold leading-tight my-4">
          Why Drona Learning Academy?
        </h1>
        <div className="flex flex-wrap flex-col lg:flex-row gap-6 items-center -m-4 max-w-6xl w-full justify-between mt-6">
          {AboutStrengthsData.map((article) => {
            return <StrengthCard key={article.id} article={article} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutStrengths;
