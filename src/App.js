import React, { useEffect, useState } from "react";
import gameData from "./utils/data/data";
import Header from "./components/header";
import './styles/styles.css'
import GameCard from "./components/gameCard";
import mergeSort from "./utils/mergeSort";

function App() {
  const [slicedGameData ,setSlicedGameData ] = useState([])

  const sliceGameData = ()=>{
    const arr = []
    for(let i = 0 ; i < 600; i++){
      arr.push(gameData[i]);
    }
    const result = mergeSort(arr,"name")
    return result
  }

  useEffect(()=>{
    const slice = sliceGameData()
     
    setSlicedGameData(slice)
  },[])


  return (
    <>
      <div className=" grid justify-items-center">
    <Header/>
    <GameCard gameProps={slicedGameData}/>
    </div>
    
    </>
  );
}

export default App;
