import React from "react";
import PropTypes from "prop-types";

const StrengthCard = ({ article }) => {
  return (
    <article className="lg:w-[300px] w-full bg-purple-200 ring-2 ring-purple-300 rounded-lg shadow-xl p-4 flex flex-col items-center lg:h-[280px] min-h-48 hover:scale-105 transition">
      <div>
        <img src={article?.img} className="h-16" alt={article?.title} />
      </div>
      <h1 className="font-bold text-purple-900 text-[22px] text-center">
        {article?.title}
      </h1>
      <p className="font-normal text-gray-800 text-[14px] text-center">
        {article?.content}
      </p>
    </article>
  );
};

StrengthCard.propTypes = {
  article: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default StrengthCard;
