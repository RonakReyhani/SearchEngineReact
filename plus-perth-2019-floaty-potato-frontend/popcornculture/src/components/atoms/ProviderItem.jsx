import React from "react";
import { Link } from "react-router-dom";

const Provider = ({ name,uri, ...props }) => {
  return (
    <div class="provider">
      <Link to="{uri}"/>
      <snap>{name}</snap>
    </div>
  )
  
};

export default Provider;
