import React from "react";
import { highlightText } from "../utils/highlighter";

const ArticleItem = ({ article, searchTerm }) => {
  const { title, date, content } = article;

  return (
    <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold mb-1">
        {highlightText(title, searchTerm)}
      </h2>
      <p className="text-sm text-gray-500 mb-3">{date}</p>
      <p className="text-gray-700">{highlightText(content, searchTerm)}</p>
    </div>
  );
};

export default ArticleItem;
