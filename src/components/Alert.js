import React, { Component } from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

import '../styles/Alert.css'

export default class AlertScore extends Component {

    render() {
        if (this.props.value < 50){
            return (
                <div className="alert">
                <Alert variant="filled" severity="error">
                <AlertTitle>WARNING</AlertTitle>
                You need to improve your posture <strong>check it out!</strong>
                </Alert>
                </div>
            )
        }
        else if (this.props.value < 60){
            return(
                <div className="alert">
                <Alert variant="filled" severity="warning">
                <AlertTitle>COME ON! </AlertTitle>
                You are doing well, but you can improve it <strong>keep it up!</strong>
                </Alert>
                </div>
            )
        }

        else  {
            return(
                <div className="alert">
                <Alert variant="filled" severity="success">
                <AlertTitle>WELL DONE!! </AlertTitle>
                You are a monster <strong>keeps on doing it like that!</strong>
                </Alert>
                </div>
            )
        }

    }
}