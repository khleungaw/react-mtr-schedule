import React, { useState, useEffect } from "react";
import { LineProps } from "../interfaces/Line.interface";
import "./Line.css";
import { lineColors, lineNames, stationNames } from "../dictionary";

function Line({lineID, selectStationFunction}: LineProps) {
  const [JSX, setJSX] = useState<Array<JSX.Element>>();

  //Get line color
  const lineColor = lineColors[lineID];

  useEffect(
    ()=>{
      //Map stations in a line as JSX elements
      const stationsList: {[index: string]: Array<string>} = {
        "AEL" : ["Hong Kong", "Kowloon", "Tsing Yi", "Airport", "AsiaWorld-Expo"],
        "TCL" : ["Hong Kong", "Kowloon", "Olympic", "Nam Cheong", "Lai King", "Tsing Yi", "Sunny Bay", "Tung Chung"],
        "WRL" : ["Hung Hom", "East Tsim Sha Tsui", "Austin", "Nam Cheong", "Mei Foo", "Tsuen Wan West", "Kam Sheung Road", "Yuen Long", "Long Ping", "Tin Shui Wai", "Siu Hong", "Tuen Mun"],
        "TKL" : ["North Point", "Quarry Bay", "Yau Tong", "Tiu Keng Leng", "Tseung Kwan O", "Lohas Park", "Hang Hau", "Po Lam"],
      }

      const stations = stationsList[lineID];

      let map = stations.map(
        (station)=>{return(
          <div key={`${lineID}${station}`} className="station-link" onClick={(e)=>selectStationFunction(station, lineID)}>
            <span className="station-circle" style={{backgroundColor: lineColor}}></span>
            <span>{station}</span>
          </div>
        );}
      );

      setJSX(map);
    },
    [lineID, selectStationFunction]
  )

    
  return(
    <div className="line" style={{color: lineColor}}>
      <header className="line-header">
        <span>{lineNames[lineID]}</span>
      </header>
      <div className="stations-list">
        {JSX}
      </div>
    </div>
  );
}

export default Line;