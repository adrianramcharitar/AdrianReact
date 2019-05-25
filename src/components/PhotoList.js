import React from "react";
import PhotoListItem from "./PhotoListItem";
import UUID from "uuid";

const PhotoList = props => {
  const photoItems = props.photos.map(pic => {
    return(
      <div className="photo-group">
     <PhotoListItem key={UUID()} url={pic.urls.small} />
     <p class="author-text">{pic.user.username}</p>
     </div>
    )
  });

  return(
  <div className ="photo-list">
     {photoItems}
     
  </div>
  )};

export default PhotoList;
