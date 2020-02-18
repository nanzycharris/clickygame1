import React from "react";
import "./Alert.css";

const Alert = props => (
    <div className="default" style={props.style}>
        {props.message ? (
            <p>{props.message}</p>
        ) : (
                <p className="default-msg black">Click on an image to earn points, but don't click on any more than once!</p>
            )}
    </div>
)

export default Alert;