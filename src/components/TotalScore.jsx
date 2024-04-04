import styled from "styled-components";

const ScoreContainer = styled.div`

    width: 110px;
    text-align: center;
    
    h1 {
    font-size: 100px;
    font-weight: 500;
    line-height: 90px;
  }

  p{
    font: 24px;
    font-weight: 500;
  }
`;

const TotalScore = ({ totalScore }) => {
  return (
    <ScoreContainer>
      <h1>{totalScore}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;
