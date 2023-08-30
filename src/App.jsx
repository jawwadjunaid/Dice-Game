import "./App.css";
import{ useState } from "react";
import GamePlay from "./Components/GamePlay";
import Startgame from "./Components/Startgame";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <Startgame toggle={toggleGamePlay} />}
    </>
  );
}

export default App;
