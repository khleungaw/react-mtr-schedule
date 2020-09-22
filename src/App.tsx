import React, { useCallback, useState, useEffect } from 'react';
import './App.css';
import Station from './components/Station';
import Line from './components/Line';

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
        const stationsNames: {[index: string]: string} = {
          "HONG_KONG": "HOK",
          "KOWLOON": "KOW",
          "TSING_YI": "TSY",
          "AIRPORT": "AIR",
          "ASIAWORLD-EXPO": "AWE",
          "OLYMPIC": "OLY",
          "NAM_CHEONG": "NAC",
          "LAI_KING": "LAK",
          "SUNNY_BAY": "SUN",
          "TUNG_CHUNG": "TUC",
          "HUNG_HOM": "HUH",
          "EAST_TSIM_SHA_TSUI": "ETS",
          "AUSTIN": "AUS",
          "MEI_FOO": "MEF",
          "TSUEN_WAN_WEST": "TWW",
          "KAM_SHEUNG_ROAD": "KSR",
          "YUEN_LONG": "YUL",
          "LONG_PING": "LOP",
          "TIN_SHUI_WAI": "TIS",
          "SIU_HONG": "SIH",
          "TUEN_MUN": "TUM",
          "NORTH_POINT": "NOP",
          "QUARRY_BAY": "QUB",
          "YAU_TONG": "YAT",
          "TIU_KENG_LENG": "TIK",
          "TSEUNG_KWAN_O": "TKO",
          "LOHAS_PARK": "LHP",
          "HANG_HAU": "HAH",
          "PO_LAM": "POA"
        }
  
        setStation([stationsNames[station.replace(/ /g, "_").toUpperCase()], line]);
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
