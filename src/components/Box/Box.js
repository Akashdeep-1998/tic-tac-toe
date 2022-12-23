import React from "react";

import "./Box.css";

const Box = (props) => {
  return (
    <div
      className="box-div"
      onClick={props.clickHandler}
      style={{ backgroundColor: props.value ? "#f1eee9" : "" }}
    >
      <h1
        style={{
          color: props.value === "X" ? "red" : "#1917fe",
          fontSize: "60px",
        }}
      >
        {props.value}
      </h1>
    </div>
  );
};

export default Box;
