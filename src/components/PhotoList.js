import React from "react";

const PhotoList = props => {
  return (
    <form>
      <input
        onChange={props.changeSearchTermState}
        type="text"
        placeholder="Search Photos"
        value={props.term}
      />
    </form>
  );
};

export default PhotoList;