import React from "react";
import { TrainProps } from "../interfaces/Train.interface";
import "./Train.css"

function Train({dest, plat, seq, source, time, ttnt, valid, lineColor}: TrainProps) {
  const stationNames: {[index: string]: string} = {
    "HOK": "Hong Kong",
    "KOW": "Kowloon",
    "TSY": "Tsing Yi",
    "AIR": "Airport",
    "AWE": "AsiaWorld-Expo",
    "OLY": "Olympic",
    "NAC": "Nam Cheong",
    "LAK": "Lai King",
    "SUN": "Sunny Bay",
    "TUC": "Tung Chung",
    "HUH": "Hung Hom",
    "ETS": "East Tsim Sha Tsui",
    "AUS": "Austin",
    "MEF": "Mei Foo",
    "TWW": "Tseung Wan West",
    "KSR": "Kam Sheung Road",
    "YUL": "Yuen Long",
    "LOP": "Long Ping",
    "TIS": "Tin Shui Wai",
    "SIH": "Siu Hong",
    "TUM": "Tuen Mun",
    "NOP": "North Point",
    "QUB": "Quarry Bay",
    "YAT": "Yau Tong",
    "TIK": "Tiu Keng Leng",
    "TKO": "Tseung Kwan O",
    "LHP": "Lohas Park",
    "HAH": "Hang Hau",
    "POA": "Po Lam"
  }

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