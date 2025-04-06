// src/utils/highlighter.jsx

import React from "react";

/**
 * Highlights all occurrences of the searchTerm in the given text.
 *
 * @param {string} text - The original text.
 * @param {string} searchTerm - The word to highlight.
 * @returns JSX with highlighted matches.
 */
export function highlightText(text, searchTerm) {
  if (!searchTerm) return text;

  const regex = new RegExp(`(${searchTerm})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <mark key={index} className="bg-yellow-300 font-semibold">
        {part}
      </mark>
    ) : (
      part
    )
  );
}
