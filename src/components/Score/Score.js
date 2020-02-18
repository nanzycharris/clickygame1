import React from "react";
import "./Score.css";

const Score = props => (
    <div className="score">
        {props.type}: {props.score}
    </div>
)

export default Score;