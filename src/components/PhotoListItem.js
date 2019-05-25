import React from "react";

const PhotoListItem = props => {
  return (
    <div className='ind-photo'>
      <img src={props.url} alt="search results" />
    </div>
  );
};

export default PhotoListItem;
