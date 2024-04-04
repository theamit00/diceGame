import React, { useEffect, useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styledComponent/Button";
import Rules from "./Rules";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 64px 80px;

  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .btns{
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isShowRules, setIsShowRules] = useState(false);

  const rollDice = () => {
    if (!selectedNumber){
      setIsError(true);
      return
    };
    const generateRandomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice((currentDice) => {
      currentDice = generateRandomNumber;

      if (selectedNumber === currentDice) {
        setTotalScore((score) => score + currentDice);
      } else {
        setTotalScore((score) => score - 2);
      }

      setSelectedNumber(undefined);

      return currentDice;
    });
  };

  const handleShowRules = ()=>{
      setIsShowRules(!isShowRules)
  }

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore totalScore={totalScore} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          isError={isError}
          setIsError={setIsError}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={() => setTotalScore(0)}>
          Rest Score
        </OutlineButton>
        <Button onClick={handleShowRules}>
            {isShowRules ? 'Hide' : 'Show'} Rules
        </Button>
      </div>
      {isShowRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;
