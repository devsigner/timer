import React from 'react';
import ReactDOM from 'react-dom';

import SetTimer from './components/set-timer.js';
import Button from './components/button.js';
import ProgressBar from './components/progress_bar.js';
import Clock from './components/clock.js';

import {formatTimer, computePercent} from './helpers/global.js'

function Title({value}) {
  return <h5>{value}</h5>
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      timer: 60,
      count: 0,
      running: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.running !== prevState.running){
      switch(this.state.running) {
        case true:
          this.handleStart();
      }
    }
  }

  const RUNNING = 'running';
  const PAUSE = 'pause';
  const STOPPED = 'stopped';
  const READY = 'ready';

  get status() {
    let s = this.state;

    if (s.running) {
      return RUNNING
    }
    else if (s.running == false && 0 < s.count && s.count < s.timer) {
      return PAUSE
    }
    else if (s.running == false && s.count >= s.timer) {
      return STOPPED
    }
    else {
      return READY
    }
  }

  get is_running() { return this.status == RUNNING }
  get is_pause() { return this.status == PAUSE }
  get is_stopped() { return this.status == STOPPED }
  get is_ready() { return this.status == READY }

  get colorState() {
    let value;
    if (this.is_running) {
      let percent = computePercent(this.state.timer, this.state.count);

      if (80 <= percent) {
        value = "orange";
      }
      else if (90 <= percent) {
        value = "red";
      }
      else {
        value = "green";
      }
    }
    else if (this.is_pause) {
      return "grey";
    }
    else if (this.is_stopped){
      return "red"
    }

    return value
  }

  get bgColorState() {
    return `bg-${this.colorState}`;
  }

  //
  // Handlers
  //

  handleStart() {
    if (this.is_running) { return }

    this.setState({
      running: true
    });

    this.timerID = setInterval(() => {
      const newCount = this.state.count + 1;

      if(newCount <= this.state.timer) {
        this.setState(
          {count: newCount}
        );
      }
      else {
        this.handleStop();
      }
    }, 1000);
  }

  handleStop() {
    if(this.state.count > 0) {
      clearInterval(this.timerID);
      this.setState(
        {running:false}
      );
    }
  }

  handleReset() {
    clearInterval(this.timerID);
    this.setState(
      {
        count: 0,
        running: false,
      }
    );
  }

  get handlers() {
    return {
      start: this.handleStart.bind(this),
      stop: this.handleStop.bind(this),
      reset: this.handleReset.bind(this)
    }
  }

  handleTimer(seconds) {
    this.setState(
      {timer: seconds}
    )
  }

  render() {
    const {timer, count} = this.state;

    return (
      <div id="timeCard-wrapper" className={this.bgColorState}>
        <div id="timeCard">
          <Title value="Standup Timer" />

          <Clock time={timer - count} />
          <ProgressBar total={timer} value={count} />

          <SetTimer value={formatTimer(this.state.timer)} onSetTimer={this.handleTimer.bind(this)} onStart={this.handleStart.bind(this)}/>

          <Button
            status={this.status}
            onClickHandlers={this.handlers}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />,
document.getElementById('app'));
