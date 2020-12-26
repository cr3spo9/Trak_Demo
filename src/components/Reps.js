import React, { useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "../styles/Reps.css";

const RenderTime = ({ remainingTime }) => {

  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);



  if (currentTime.current !== remainingTime) {
    
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender(val => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <div className="time-wrapper">
      <div className="timer">
        <div className="text-remaining ">Remaining</div> 
        <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
        {remainingTime}
        </div>
        {prevTime.current !== null && (
          <div
            key={prevTime.current}
            className={`time ${!isTimeUp ? "down" : ""}`}
          >
            {prevTime.current}
          </div>
        )}
        <div className="text-reps">Reps</div>
      </div>

      
    </div>
  );
};

function Reps() {

  return (
    <div className="Reps">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          //size={150}
          strokeLinecap="round"
          isPlaying
          duration={20}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        >
          {RenderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}
export default Reps;

