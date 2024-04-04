import styled from "styled-components"
import { Button } from "../styledComponent/Button";

import dices from "../assets/images/dices.png";

const Container = styled.div`
  width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      font-weight: 700;
    }
  }
`;



const StartGame = ({ toggleGamePlay }) => {
  return (
    <Container>
      <div className="logo">
        <img src={dices} alt="dices" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggleGamePlay}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame