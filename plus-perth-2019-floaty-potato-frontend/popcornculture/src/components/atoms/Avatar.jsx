import React from "react";

const Avatar = ({ avatar, ...props }) => {
  return (
    <div className="image-cropper">
      <img src={avatar} className="profile-pic" alt="person profile picture" />
    </div>
  );
};

WPAvatar.propTypes = {
  image: PropTypes.string.isRequired
};
