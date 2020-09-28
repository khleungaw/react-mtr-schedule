import React, { useState, useEffect } from "react";
import { LineProps } from "../interfaces/Line.interface";
import "./Line.css";
import { lineColors, lineNames, stationsList } from "../dictionary";

function Line({lineID, selectStationFunction}: LineProps) {
  const [JSX, setJSX] = useState<Array<JSX.Element>>();

  //Get line color
  const lineColor = lineColors[lineID];

  useEffect(
    ()=>{
      //Map stations in a line as JSX elements
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
    [lineID, selectStationFunction, lineColor]
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