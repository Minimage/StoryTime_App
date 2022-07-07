import React, { useEffect, useState, useContext } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Questions } from "./questions";

function TheProgressBar() {

  
  const storiesText = [
    "The 食物 is delicious",    
    "The 食物 is hot",    
    "The 食物 is cold",    
    "The 食物 is missing",    
    "The 食物 is old",    
]
  const length = storiesText.length;
  const now = 100/length;

  // console.log(length, "this is the length")
  // console.log(now, "this is the progress increment")

  useEffect(() => {
     // actions.getQuestions()
  })

  // let _now = handleClick =(() => {
  //   now+now
  // })
  return (

    <ProgressBar 
      now={now} 
      label={`${now}%`} 
      style={{textAlign:"center"}} 
    />

  )
}

export default TheProgressBar;