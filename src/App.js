import React, { useEffect, useState } from "react";
import Header from "./components/header";
import './styles/styles.css'
import GameCard from "./components/gameCard";
import { useFlyMenuData } from "./context/flyMenuContext";

function App() {
  const [slicedGameData, setSlicedGameData] = useState([]);
  const { flyMenuData, setFlyMenuData } = useFlyMenuData();
  const sliceGameData = (gamedata) => {
    const arr = [];
    for (let i = 0; i < 10 ; i++) {
      arr.push(gamedata[i]);
    }
    return arr;
  };

  useEffect(() => {
    const slice = sliceGameData(flyMenuData.ordenated);
    setSlicedGameData(slice);
    setFlyMenuData({ loaded: false, ordenated: flyMenuData.ordenated });
  }, [flyMenuData.loaded]); 

  return (
    <>
      <div className="grid justify-items-center">
        <Header />
        <GameCard gameProps={slicedGameData} />
      </div>
    </>
  );
}

export default App;
