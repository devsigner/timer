import React from 'react';
import {timeToSeconds} from '../helpers/global.js'

class SetTimer extends React.Component {
  onChange(event) {
    event.preventDefault();

    const values = this.refs.seconds.value;

    if(values != "") {
      this.props.onSetTimer(timeToSeconds(values));
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
