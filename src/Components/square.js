import React from 'react';
import '../square.css'
 const Square = (props) => {
    return(
        <div onClick={props.onClick}
        className={`square ${props.isWinner ? 'winner' : ''}`} 
        >
            <h5>{props.value}</h5>
        </div>
    )
 }

 export default Square;