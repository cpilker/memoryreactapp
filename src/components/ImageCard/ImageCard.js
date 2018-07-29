import React from "react";
import "./ImageCard.css";
// import Counter from "../Increment/Counter";

const ImageCard = props => {
    // console.log('props', props);
    return (
        <div className="col-xs-12 col-md-3" >
            <div className="card" >
                <img alt={props.id} src={window.location.origin + props.image} onClick={(event) => props.onClick(props.id)}/>
            </div>
        </div>
)}

export default ImageCard;