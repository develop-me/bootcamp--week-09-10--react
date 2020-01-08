import React, { useState } from "react";

const Scorer = () => {
  // sets up player 1 score value
  const [player1, setPlayer1] = useState(0);
  // sets up player 2 score value
  const [player2, setPlayer2] = useState(0);

  // event handlers for both
  const scorePlayer1 = () => setPlayer1(player1 + 1);
  const scorePlayer2 = () => setPlayer2(player2 + 1);

  // display counter and setup click handler
  return (
    <>
      <p onClick={ scorePlayer1 }>Player 1: { player1 }</p>
      <p onClick={ scorePlayer2 }>Player 2: { player2 }</p>
    </>
  );
}

export default Scorer;
