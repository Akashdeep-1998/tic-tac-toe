import React from "react";

import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="Main-nav" onClick={props.resetGame}>
      <div
        className="nav-div player_1"
        style={{
          backgroundColor: props.isXTurn ? "red" : "",
          fontWeight: props.isXTurn ? "bold" : "",
        }}
      >
        Player 1
      </div>
      <div className="nav-div reset_game">RESET GAME</div>
      <div
        className="nav-div player_2"
        style={{
          backgroundColor: !props.isXTurn ? "#1917fe" : "",
          fontWeight: !props.isXTurn ? "bold" : "",
        }}
      >
        Player 2
      </div>
    </div>
  );
};

export default Navbar;
