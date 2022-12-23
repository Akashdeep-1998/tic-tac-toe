import React from "react";

import "./Draw.css";

const Draw = (props) => {
  return (
    <div className="draw">
      <h1>MATCH DRAWN, BETTER LUCK NEXT TIME!</h1>
      <button
        style={{
          backgroundColor: "red",
          borderColor: "red",
          fontWeight: "bold",
        }}
        onClick={props.playAgainHandler}
      >
        PLAY AGAIN ?
      </button>
    </div>
  );
};

export default Draw;
