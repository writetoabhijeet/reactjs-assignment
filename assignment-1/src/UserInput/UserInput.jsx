import React from 'react';

const userInput =(props)=>{
    return (<input onChange ={props.changed} value={props.currentname} className="UserInput" type="text"  />)
}

export default userInput;