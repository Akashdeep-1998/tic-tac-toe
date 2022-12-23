import React from "react";

import "./Win.css";

const Winner = (props) => {
  return (
    <div className="winner">
      <h1>PLAYER {props.winner} HAS WON THE GAME.</h1>
      <button
        style={{
          backgroundColor: "yellow",
          borderColor: "yellow",
          fontWeight: "bold",
        }}
        onClick={props.playAgainHandler}
      >
        PLAY AGAIN ?
      </button>
    </div>
  );
};

export default Winner;
