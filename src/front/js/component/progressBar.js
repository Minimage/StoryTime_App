import React, { useEffect, useState, useContext } from 'react';
import { Context } from "../store/appContext";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Questions } from "./questions";

function TheProgressBar() {
  const { store, actions } = useContext(Context)
  const [count, setCount] = useState(now)
  const lengthOfMyQuestion = store.myQuestion.length
  
  console.log(store.myQuestion.length, "this is from progressBar Component")

  const now = 100/lengthOfMyQuestion;

  
  return (

    <ProgressBar 
      now={now}
      // now={setCount(count + now)} 
      label={`${now}%`} 
      style={{textAlign:"center"}} 
      onClick={()=>setCount(count + now)}
    />

  )
}

export default TheProgressBar;