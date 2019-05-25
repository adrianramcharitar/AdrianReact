import React from "react";
import PhotoListItem from "./PhotoListItem";
import UUID from "uuid";

const PhotoList = props => {
  const photoItems = props.photos.map(pic => {
    return <PhotoListItem key={UUID()} url={pic.urls.small} />;
  });

  return(
  <div className ="photo-list">
     {photoItems}
  </div>
  )};

export default PhotoList;
