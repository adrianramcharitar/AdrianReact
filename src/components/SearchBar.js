import React from 'react';

const SearchBar = props => {
  return (
    <form>
      <input
        className="search-box"
        onChange={props.changeSearchTermState}
        type="text"
        placeholder="Search Photos"
        value={props.term}
      />
    </form>
  );
};

export default SearchBar;
