import React, { useEffect, useState } from "react";
import { destionationsList, lineColors, stationNames } from "../dictionary";
import { StationProps } from "../interfaces/Station.interface";
import { TrainProps } from "../interfaces/Train.interface";
import Platform from "./Platform";
import "./Station.css"

function Station({station, line, JSON, toHome, refresh, animationState}: StationProps) {
  const [JSX, setJSX] = useState<Array<JSX.Element>>();

  //Get line color
  const lineColor = lineColors[line];

  useEffect(
    ()=>{
      if (JSON.data === "NULL") {return;}
      //Check if too many requests are sent
      if (JSON.data === 429) {
        setJSX(
          [<span key="error">You may have sent too many requests</span>]
        );
        return;
      }
      
      //Check if internal server error is received
      if (JSON.data === 500) {
        setJSX(
          [<span key="error">Seems like something is wrong on MTR's server</span>]
        );
        return;
      }

      if (JSON.status === 0) {
        setJSX(
          [<span key="error">{JSON.message}</span>]
        );
        return;
      }

      //Get key value
      const key = Object.keys(JSON.data)[0];
      //Get line
      const line = key.split("-")[0];

      //Get a copy of the array using the key
      interface TrainsInfo {[key: string] : Array<TrainProps>};
      let data: any = JSON.data;
      const trainsInfo: TrainsInfo = data[key] as TrainsInfo;

      //Check data absence
      if (Object.keys(trainsInfo).length === 2) {
        setJSX(
          [<span>Data is absent</span>]
        );
        return;
      }

      //Extract UP and DOWN, put them in an array with index 0 or 1
      //If both of them exist, UP should have index 0 and DOWN should have index 1
      //If trainsInfo only has 2 child, then something from the api is wrong 
      const directions: Array<string> = [];

      Object.keys(trainsInfo).forEach(
        (key)=>{if (key === "DOWN" || key === "UP") {directions.push(key);}}
      );

      //Map UP and DOWN as JSX elements
      let map = directions.map(
        (direction: string, index: number)=>{
          let trains = trainsInfo[direction];
          return(<Platform key={`${direction}${index}`} lineColor={lineColor} trains={trains} direction={`TRAINS TOWARDS ${destionationsList[line][direction].toUpperCase()}`}/>)
        }
      )
      
      setJSX(map);
    },
    [JSON, lineColor]
  );

  return(
    <div className="station">
      <header className="station-header">
        <span onClick={(e)=>toHome("HOME", "HOME")} className="station-button">BACK</span>
        <span>|</span>
        <span onClick={(e)=>{refresh(line, station)}} className="station-button">REFRESH</span>
        <span>|</span>
        <span style={{color: lineColor}}>{stationNames[station].toUpperCase()} </span>
        <span>Last Updated: {JSON.curr_time}</span>
      </header>
      <div className={animationState ? "platforms-list visible" : "platforms-list invisible"}>
        {JSX}
      </div>
    </div>
  )
}

export default Station;