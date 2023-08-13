import Round from "../round/round";
import { useState } from "react";

function GridNumber(props){

    let rounds = [];

    for (let i = 0; i < 24; i++) {
        rounds.push(<Round key={i} value={props.number}></Round>);
    }
    
    return (
        <div className={`grid ${props.number}`}>
            {rounds}
        </div>
    )
}

export default GridNumber;