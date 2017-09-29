import React from "react";
import { Link } from 'react-router-dom';

function Header(props){
  return (
    <div>
      <div>
        <h1>Portfolio</h1>
        <p>A collection of work by Nathan Stewart</p>
        <Link to="/">Home</Link> | <Link to="/about">About Me</Link>
      </div>
    </div>
  );
}

export default Header;
