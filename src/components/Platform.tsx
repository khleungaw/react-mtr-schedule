import React, { useEffect, useState } from "react";
import { PlatformProps } from "../interfaces/Platform.interface";
import Train from "./Train";
import "./Platform.css"

function Platform({trains, direction, lineColor}: PlatformProps) {
  const [JSX, setJSX] = useState<Array<JSX.Element>>();

  useEffect(
    ()=>{
      //Map trains as JSX elements
      if (trains !== undefined) {
        let map = trains.map(
          (train)=>{return(<Train key={`${train.seq}_${train.ttnt}_${train.time}`} lineColor={lineColor} dest={train.dest} plat={train.plat} seq={train.seq} source={train.source} time={train.time} ttnt={train.ttnt} valid={train.valid} />)}
        )

        setJSX(map);
      };
    },
    [trains, lineColor]
  )

  return(
    <div className="platform">
      <header className="platform-header">
        <span>{direction}</span>
      </header>
      <div className="trains-list">
        {JSX}
      </div>
    </div>
  )
}

export default Platform;