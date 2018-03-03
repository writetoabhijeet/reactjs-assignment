import React from 'react';
import './UserOutput.css'

const userOutput =(props)=>{
    return (
        <div>
        <p>This is first {props.username}</p>    
        <p>This is second {props.username}</p>    
        </div>
    )
}

export default userOutput;