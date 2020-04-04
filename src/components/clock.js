import React from 'react';
import {formatTimer} from '../helpers/global.js'

function Clock({time}) {
  return (
    <div className="displayedTime">
      <h1>{formatTimer(time)}</h1>
    </div>
  )
}

export default Clock
