import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles, searchTerm }) => {
  const filteredArticles = articles.filter((article) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      article.title.toLowerCase().includes(lowerSearch) ||
      article.content.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-10">
      {searchTerm && (
        <p className="text-gray-600 mb-4">
          Showing {filteredArticles.length} result
          {filteredArticles.length !== 1 ? "s" : ""} for "
          <span className="font-semibold">{searchTerm}</span>"
        </p>
      )}

      <div className="space-y-5">
        {filteredArticles.map((article) => (
          <ArticleItem
            key={article.id}
            article={article}
            searchTerm={searchTerm}
          />
        ))}

        {!filteredArticles.length && (
          <p className="text-center text-gray-500 mt-10">No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default ArticleList;
