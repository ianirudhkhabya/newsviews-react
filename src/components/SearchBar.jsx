import PropTypes from "prop-types";

const SearchBar = ({ handleQueryChange, handleSearchClick }) => {
  return (
    <div className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleQueryChange}
        style={{ outline: "none" }}
      />
      <button
        className="btn btn-outline-success"
        type="button"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  handleQueryChange: PropTypes.func,
  handleSearchClick: PropTypes.func,
};

export default SearchBar;
