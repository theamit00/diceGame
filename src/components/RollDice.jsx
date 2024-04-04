import { useState } from "react";
import styled from "styled-components"

import dice1 from "../assets/images/dice_1.png"
import dice2 from "../assets/images/dice_2.png"
import dice3 from "../assets/images/dice_3.png"
import dice4 from "../assets/images/dice_4.png"
import dice5 from "../assets/images/dice_5.png"
import dice6 from "../assets/images/dice_6.png"

const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6]

const RollDiceContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }
`;

const RollDice = ({ currentDice, rollDice }) => {

  // const handleCurrentDice = () => {
  //   const generateRandomNumber = Math.floor(Math.random() * 6) + 1;
  //   setCurrentDice((currentDice) => (currentDice = generateRandomNumber));
  // };
  return (
    <RollDiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={diceArray[currentDice - 1]} alt="dice" />
        <p>Click on Dice to roll</p>
      </div>
    </RollDiceContainer>
  );
};

export default RollDice