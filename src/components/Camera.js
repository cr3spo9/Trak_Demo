import React from 'react'
import Webcam from "react-webcam";

import "../styles/Camera.css"

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
  
    return (
      <div  style={{width: '100%', height:"100%", margin:0 }}>
        <Webcam 
            className="camera-pos"
            audio={false}
            height='100%'
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width='100%'
            mirrored={false}
        />

      </div>
    );
  };    
export default WebcamCapture;