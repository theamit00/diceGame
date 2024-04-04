import React from 'react'
import styled from 'styled-components'

const RulesContainer = styled.section`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin: 64px auto 0px;
  background: #fbf1f1;
  width: 800px;
  border-radius: 10px;

    .heading{
        font-size: 24px;
        font-weight: 700;
    }

`;

const Rules = () => {
  return (
    <RulesContainer>
        <h3 className="heading">How to play dice game</h3>
        <div className="rules">
          <p>Select any number.</p>
          <p>Click on dice image.</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice.
          </p>
          <p>if you get wrong guess then 2 point will be dedcuted. </p>
        </div>
    </RulesContainer>
  );
}

export default Rules