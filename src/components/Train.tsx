import React from "react";
import { stationNames } from "../dictionary";
import { TrainProps } from "../interfaces/Train.interface";
import "./Train.css"

function Train({dest, plat, seq, source, time, ttnt, valid, lineColor}: TrainProps) {

  return(
    <div className="train" style={{backgroundColor: lineColor}}>
      <div className="train-info-box">
        <span className="train-seq">Train #{seq}</span>
        <span className="train-info">{ttnt} MINUTES</span>
        <span className="train-description">Till Arrival</span>
      </div>

      <div className="train-info-box">
        <span className="train-description">Destionation</span>
        <span className="train-info">{stationNames[dest].toUpperCase()}</span>
      </div>
      

    </div>
  )
}

export default Train;