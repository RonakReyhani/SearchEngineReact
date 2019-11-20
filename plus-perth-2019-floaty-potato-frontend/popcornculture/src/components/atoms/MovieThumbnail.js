import React from "react";

const MovieThumbnail = ({ image, ...props }) => {
  return <img src={image} alt="MovieThumbnail" />;
};

export default MovieThumbnail;
