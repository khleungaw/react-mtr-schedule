import React, { useCallback, useState, useEffect } from 'react';
import './App.css';
import Station from './components/Station';
import Line from './components/Line';
import { stationSymbols } from './dictionary';

function App() {
  const [apiJSON, setApiJSON] = useState({data: "NULL"});
  const [currentStation, setStation] = useState<Array<string>>(["HOME", "HOME"]);
  const [animationState, setAnimationState] = useState<boolean>(true);

  const callAPI = useCallback(
    (line: string , station: string)=>{
      setAnimationState(false);
      fetch(`https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${line}&sta=${station}&lang=en`)
        .then(res => {
          if (res.status !== 200) {
            return {data: res.status};
          } else {
            return res.json();
          }
        })
        .then(data => {setApiJSON(data);setTimeout(()=>setAnimationState(true), 300);});
    },
    []
  );

  const selectStation = useCallback(
    (station: string, line: string)=>{
      setAnimationState(false);
      //Update currentStation
      if (station === "HOME" && line === "HOME") {
        setStation(["HOME", "HOME"]);
        setTimeout(()=>setAnimationState(true), 300);
      } else {  
        setStation([stationSymbols[station.replace(/ /g, "_").toUpperCase()], line]);
      }
    },
    []
  )

  useEffect(
    ()=>{
      //Toggle animation
      //setAnimationState(false);
      //setTimeout(()=>setAnimationState(true), 500);
      //Call MTR API to update apiJSON when a new station is selected
      if (currentStation[0] !== "HOME") {
        const station = currentStation[0];
        const line = currentStation[1];
        callAPI(line, station);
      }
    },
    [currentStation, callAPI]
  )

  return (
    <div className="app">
      {currentStation[0] === "HOME" &&
        <div className={animationState ? "line-list visible" : "line-list invisible"}>
          <span>Click on a station to view the scheduled trains</span>
          <Line lineID="AEL" selectStationFunction={selectStation}/>
          <Line lineID="TCL" selectStationFunction={selectStation}/>
          <Line lineID="WRL" selectStationFunction={selectStation}/>
          <Line lineID="TKL" selectStationFunction={selectStation}/>
        </div>
      }
      {currentStation[0] !== "HOME" &&
        <Station station={currentStation[0]} line={currentStation[1]} JSON={apiJSON} toHome={selectStation} refresh={callAPI} animationState={animationState}/>
      }
    </div>
  );
}

export default App;
