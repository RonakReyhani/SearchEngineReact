import React, { Component } from "react";
import Logo from "./atoms/Logo";
import { Link } from "react-router-dom";

const TakeMeHome = ({ image }) => {
  return (
    <div>
      <Link to="/">
        <Logo image={image} /> <span class="title">PopcornCulture</span>
      </Link>
    </div>
  );
};

export default TakeMeHome;
