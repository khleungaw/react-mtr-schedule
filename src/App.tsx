import React, { useCallback, useState, useEffect } from 'react';
import './App.css';
import Station from './components/Station';
import Line from './components/Line';
import { stationSymbols } from './dictionary';

function App() {
  const [apiJSON, setApiJSON] = useState({data: "NULL"});
  const [currentStation, setStation] = useState<Array<string>>(["HOME", "HOME"]);

  const callAPI = useCallback(
    (line: string , station: string)=>{
      fetch(`https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${line}&sta=${station}&lang=en`)
        .then(res => {
          if (res.status !== 200) {
            return {data: res.status};
          } else {
            return res.json();
          }
        })
        .then(data => {setApiJSON(data);});
    },
    []
  );

  const selectStation = useCallback(
    (station: string, line: string)=>{
      if (station === "HOME" && line === "HOME") {
        setStation(["HOME", "HOME"]);
      } else {  
        setStation([stationSymbols[station.replace(/ /g, "_").toUpperCase()], line]);
      }
    },
    []
  )

  useEffect(
    ()=>{
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
      <nav></nav>
      {currentStation[0] === "HOME" &&
        <div className="line-list">
          <span>Click on a station to view the scheduled trains</span>
          <Line lineID="AEL" selectStationFunction={selectStation}/>
          <Line lineID="TCL" selectStationFunction={selectStation}/>
          <Line lineID="WRL" selectStationFunction={selectStation}/>
          <Line lineID="TKL" selectStationFunction={selectStation}/>
        </div>
      }
      {currentStation[0] !== "HOME" &&
        <Station station={currentStation[0]} line={currentStation[1]} JSON={apiJSON} toHome={selectStation} refresh={callAPI}/>
      }
    </div>
  );
}

export default App;
