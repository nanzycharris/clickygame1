import React from "react";
import "./CharCard.css";
// import { url } from "inspector";

const CharCard = ({ id, name, image, handlePicked }) => (
    <div>
        <div
            className="card"
            key={id}
            data-id={id}
            name={name}
            style={{ backgroundImage: `url(${image})` }}
            onClick={handlePicked}
        >
        </div>
    </div>
)

export default CharCard;
