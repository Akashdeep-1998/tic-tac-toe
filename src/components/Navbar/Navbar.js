import React from "react";

import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="nav-div" onClick={props.resetGame}>
      <span>RESET GAME</span>
    </div>
  );
};

export default Navbar;