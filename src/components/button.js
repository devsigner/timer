import React from 'react';

class Button extends React.Component {
  render() {
    let actions;

    switch (this.props.status) {
      case 'ready':
        actions = (
          <div>
            <ButtonStart onClick={this.props.onClickHandlers['start']} />
          </div>
        );
        break;

      case 'pause':
        actions = (
          <div>
            <ButtonReset onClick={this.props.onClickHandlers['reset']} />
            <ButtonStart onClick={this.props.onClickHandlers['start']} />
          </div>
        );
        break;

      case 'stopped':
        actions = (
          <div>
            <ButtonReset onClick={this.props.onClickHandlers['reset']} />
          </div>
        );
        break;

      case 'running':
        actions = (
          <div>
            <ButtonStop onClick={this.props.onClickHandlers['stop']} />
          </div>
        );
        break;
    }
    return actions;
  }
}

function ButtonStart({ onClick }) {
  return (
    <button title="Start" className="startButton" onClick={onClick}>
      <i className="fas fa-play"></i>
    </button>
  )
}

function ButtonStop({ onClick }) {
  return (
    <button title="Stop" className="stopButton" onClick={onClick}>
      <i className="fas fa-stop"></i>
    </button>
  )
}

function ButtonReset({ onClick }) {
  return (
    <button title="Reset" className="resetButton" onClick={onClick}>
      <i className="fas fa-undo-alt"></i>
    </button>
  )
}

export default Button
