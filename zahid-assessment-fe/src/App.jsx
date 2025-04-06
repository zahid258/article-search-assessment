import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import ArticleList from "./components/ArticleList";
import articles from "./data/articles";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 px-4">
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold text-gray-800">Article Search</h1>
        <p className="text-gray-500">Type a keyword to filter and highlight</p>
      </header>

      <Searchbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ArticleList articles={articles} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
