import React from "react";
import X from "../../X.png";
import O from "../../O.png";

import "./Box.css";

const Box = (props) => {
  return (
    <div
      className="box-div"
      onClick={props.clickHandler}
      style={{ backgroundColor: props.value ? "#f1eee9" : "" }}
    >
      <div
        style={{
          color: props.value === "X" ? "red" : "#1917fe",
          fontSize: "60px",
        }}
      >
        {props.value === "X" ? (
          <img src={X} alt="P1" id="x" />
        ) : props.value === "O" ? (
          <img src={O} alt="P2" id="o" />
        ) : (
          props.value
        )}
        {/* {props.value} */}
      </div>
    </div>
  );
};

export default Box;
