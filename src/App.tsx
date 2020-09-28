import React, { useCallback, useState } from 'react';
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
      //Set animationState to false for refresh animation
      setAnimationState(false);
      //Fetch data from API
      fetch(`https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${line}&sta=${station}&lang=en`)
        .then(res => {
          if (res.status !== 200) {
            //Return status code to display error
            return {data: res.status};
          } else {
            return res.json();
          }
        })
        .then(data => setApiJSON(data))
        //Change currentStation (transition to next page) after JSON is changed
        .then(()=>{
          setStation([station, line]);
          setTimeout(()=>setAnimationState(true), 300);
        })
    },
    []
  );

  const selectStation = useCallback(
    (station: string, line: string)=>{
      //Set animationState to false for transition during stations selection or going back to home page
      setAnimationState(false);
      //Update currentStation
      if (station === "HOME" && line === "HOME") {
        setStation(["HOME", "HOME"]);
        setTimeout(()=>setAnimationState(true), 300);
      } else {  
        callAPI(line, stationSymbols[station.replace(/ /g, "_").toUpperCase()]);
        //setStation([stationSymbols[station.replace(/ /g, "_").toUpperCase()], line]);
      }
    },
    [callAPI]
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
