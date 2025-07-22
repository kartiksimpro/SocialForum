import React from "react";
import PropTypes from "prop-types";

const Article = ({ article }) => {
  return (
    <article className="lg:w-[300px] w-full bg-slate-100 ring-2 ring-slate-300 rounded-lg shadow-xl p-4 flex flex-col lg:h-[280px] min-h-48 hover:scale-105 transition">
      <div>
        <img src={article?.img} className="h-20" alt={article?.title} />
      </div>
      <h1 className="font-semibold text-gray-900 text-[22px]">
        {article?.title}
      </h1>
      <p className="font-normal text-gray-800 text-[14px]">
        {article?.content}
      </p>
    </article>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
