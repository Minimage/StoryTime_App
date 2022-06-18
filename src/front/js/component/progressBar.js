import React, { useEffect, useState } from 'react';

let progressInterval = null;

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    progressInterval = setInterval(() => {
      setProgress(prev => prev + 1);
    }, 100);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(progressInterval);
    }
  }, [progress]);

  return (
    <div className="progress">
      <div className="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
    </div>
  );
}

export default ProgressBar;