import React, { useState } from "react";

import Box from "../Box/Box";
import Win from "../Win/Win";
import Navbar from "../Navbar/Navbar";
import Draw from "../Draw/Draw";

import "./Container.css";

const Container = () => {
  const [value, setValue] = useState(Array(9).fill(null));

  const [Xturn, setXturn] = useState(true);

  const [filledBox, setFilledBox] = useState(0);

  const clickHandler = (boxIndex) => {
    if (value[boxIndex] !== null) {
      return value[boxIndex];
    }
    let currentValue = [...value];
    currentValue[boxIndex] = Xturn ? "X" : "O";
    setValue(currentValue);
    setFilledBox((prevState) => prevState + 1);
    setXturn(!Xturn);
  };

  const winnerCheckHandler = () => {
    const winnerCheck = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const i of winnerCheck) {
      if (
        value[i[0]] !== null ||
        value[i[1]] !== null ||
        value[i[2]] !== null
      ) {
        if (value[i[0]] === value[i[1]] && value[i[0]] === value[i[2]]) {
          //   setDocTitle(Xturn ? "'O' Won!" : "'X' Won!");
          return true;
        }
      }
    }
    return false;
  };

  const playAgainHandler = () => {
    setValue(Array(9).fill(null));
    setFilledBox(0);
    setXturn(true);
  };

  const drawHandler = () => {
    if (!isWinner) {
      if (filledBox === 9) {
        // setDocTitle("Match Drawn!");
        return true;
      }
    }
    return false;
  };

  const isWinner = winnerCheckHandler();
  const isDraw = drawHandler();

  const documentTitleHandler = () => {
    if (isWinner) {
      return Xturn ? "Player-2 won!" : "Player-1 Won!";
    } else if (isDraw) {
      return "Match Drawn!";
    } else {
      return "Tic Tac Toe";
    }
  };

  document.title = documentTitleHandler();

  return (
    <>
      {isWinner ? (
        <Win
          winner={Xturn ? "Player-2" : "Player-1"}
          playAgainHandler={playAgainHandler}
        />
      ) : isDraw ? (
        <Draw playAgainHandler={playAgainHandler} />
      ) : (
        <>
          <Navbar resetGame={playAgainHandler} isXTurn={Xturn} />
          <div className="container">
            <div className="main-div">
              <Box value={value[0]} clickHandler={() => clickHandler(0)} />
              <Box value={value[1]} clickHandler={() => clickHandler(1)} />
              <Box value={value[2]} clickHandler={() => clickHandler(2)} />
            </div>
            <div className="main-div">
              <Box value={value[3]} clickHandler={() => clickHandler(3)} />
              <Box value={value[4]} clickHandler={() => clickHandler(4)} />
              <Box value={value[5]} clickHandler={() => clickHandler(5)} />
            </div>
            <div className="main-div">
              <Box value={value[6]} clickHandler={() => clickHandler(6)} />
              <Box value={value[7]} clickHandler={() => clickHandler(7)} />
              <Box value={value[8]} clickHandler={() => clickHandler(8)} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Container;
