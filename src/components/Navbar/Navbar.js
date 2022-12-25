import React from "react";

import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="Main-nav">
      <div
        className="nav-div player_1"
        style={{
          backgroundColor: props.isXTurn ? "red" : "",
        }}
      >
        PLAYER-1
      </div>
      <div className="nav-div reset_game" onClick={props.resetGame}>
        NEW GAME
      </div>
      <div
        className="nav-div player_2"
        style={{
          backgroundColor: !props.isXTurn ? "#1d0feb" : "",
        }}
      >
        PLAYER-2
      </div>
    </div>
  );
};

export default Navbar;
