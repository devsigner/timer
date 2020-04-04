import React from 'react';
import {computePercent} from '../helpers/global.js'

function ProgressBar({ total, value }) {
  const percentage = computePercent(total, value);

  return (
    <div className="progressbar-wrapper">
      <progress max="100" value={percentage}>
        {percentage}%
      </progress>
    </div>
  )
}

export default ProgressBar
