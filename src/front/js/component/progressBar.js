import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function TheProgressBar() {
  const now = 20;
  return <ProgressBar now={now} label={`${now}%`} style={{textAlign:"center"}} />;
}

export default TheProgressBar;