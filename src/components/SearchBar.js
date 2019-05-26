import React from 'react';

const SearchBar = props => {
  return (
    <div className="search-container">
    <form >
      
      <input
        className="search-box"
        onChange={props.changeSearchTermState}
        type="text"
        placeholder="Search Photos"
        value={props.term}
      />
     
    </form>
    </div>
  );
};

export default SearchBar;
