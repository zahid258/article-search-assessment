import React from "react";

const Searchbar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="w-full max-w-xl mx-auto my-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search articles..."
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Searchbar;
