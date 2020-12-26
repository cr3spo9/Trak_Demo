import React, { Component } from "react";

import SplitPane from 'react-split-pane';
import Reps from './Reps.js';
import Progress from "./Progress.js";
import WebcamCapture from "./Camera.js";

class Train extends Component {

    render () {
      return (<div>
        
        <SplitPane
          split="vertical"
          defaultSize="35%"
          minSize={350}
        >
        <div className="trakDiv"> </div>
        <div style={{width: '100%', height:"100%", backgroundColor: 'white'}}> <WebcamCapture/> <Reps/> <Progress/> </div>
        </SplitPane>
       </div>
      )
    }
}
export default Train;

