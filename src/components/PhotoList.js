import React from "react";
import PhotoListItem from "./PhotoListItem";
import UUID from "uuid";

const PhotoList = props => {
  const photoItems = props.photos.map(pic => {
    return <PhotoListItem key={UUID()} url={pic.urls.small} />;
  });

  return <ul>{photoItems}</ul>;
};

export default PhotoList;
