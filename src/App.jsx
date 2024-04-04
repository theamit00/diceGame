import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { useState } from "react";

const App = ()=>{

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = ()=>{
    // setIsGameStarted(!isGameStarted)
    // --------OR--------
    setIsGameStarted((isGameStarted)=> !isGameStarted);
  }

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggleGamePlay={toggleGamePlay} />}
    </>
  );
}

export default App;