import React, { useEffect, useState } from "react";
import Header from "./components/header";
import './styles/styles.css'
import GameCard from "./components/gameCard";
import { useFlyMenuData } from "./context/flyMenuContext";

function App() {
  const [slicedGameData, setSlicedGameData] = useState([])
  const { flyMenuData } = useFlyMenuData()
  const sliceGameData = (gamedata) => {

    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push(gamedata[i]);
    }

    return arr
  }

  useEffect(() => {
    const slice = sliceGameData(flyMenuData.ordenated)
    setSlicedGameData(slice)
  }, [])


  return (
    <>

      <div className=" grid  justify-items-center">

        <Header />
        <button
        onClick={()=>{
          const slice = sliceGameData(flyMenuData.ordenated)
          setSlicedGameData(slice)

        }}
        class="felx relative rounded-md mt-40 bg-indigo-500 px-3.5 py-2.5 text-sm ml-80 font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 float-right">
          Ordenar
        </button>

        <GameCard gameProps={slicedGameData} />

      </div>

    </>
  );
}

export default App;
