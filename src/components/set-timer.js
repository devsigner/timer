import React from 'react';
import {timeToSeconds} from '../helpers/global.js'

class SetTimer extends React.Component {
  onChange(event) {
    event.preventDefault();

    const strSeconds = this.refs.seconds.value;
    const time = strSeconds.match(/([0-9]+):?([0-9]*)/)

    if(time) {
      this.props.onSetTimer(timeToSeconds(time));
    }
  }

  render() {
    return (
      <label>
        <span>Set&nbsp;Timer</span>
        <input
          type="text"
          ref="seconds"
          placeholder="Min[:Sec]"
          defaultValue={this.props.value}
          onChange={this.onChange.bind(this)}
        />
      </label>
    )
  }
}

export default SetTimer
