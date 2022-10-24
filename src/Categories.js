import React from 'react';

const Categories = ({ categories, filtered }) => {
  return (
    <div className="container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filtered(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;