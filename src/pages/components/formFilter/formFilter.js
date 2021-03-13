import React from "react";
import "./formFilter.scss";

export const sorting = (sortBy) => {
  switch (sortBy) {
    case "rating-descending":
      return (a, b) => a.vote_average - b.vote_average;

    case "rating-ascending":
      return (a, b) => b.vote_average - a.vote_average;

    case "title-descending":
      return (a, b) => (a.title < b.title) - (a.title > b.title);

    case "title-ascending":
      return (a, b) => (a.title > b.title) - (a.title < b.title);

    default:
      return (a, b) => a - b;
  }
};

const FormFilter = (props) => {
  const {
    searchTerm,
    sortTerm,
    handleSortingChange,
    handleSearchChange,
  } = props;

  return (
    <>
      <form className="form">
        <div className="form-input">
          <label htmlFor="filterTitle">Title</label>
          <input
            name="filterTitle"
            id="filterTitle"
            type="text"
            placeholder="Filter by title..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="sorting">Sort by</label>
          <select
            id="sorting"
            name="sorting"
            value={sortTerm}
            onBlur={handleSortingChange}
          >
            <option value="default" disabled>
              Choose here
            </option>
            <option value="title-descending">Title Descending</option>
            <option value="title-ascending">Title Ascending</option>
            <option value="rating-descending">Rating Descending</option>
            <option value="rating-ascending">Rating Ascending</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default FormFilter;
