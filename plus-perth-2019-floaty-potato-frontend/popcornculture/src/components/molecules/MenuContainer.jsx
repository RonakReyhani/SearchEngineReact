import React, { Component } from "react";

class MenueContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* how to hide button and show profile image if user logged in */}
        <Avatar
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Watch List</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default MenueContainer;
