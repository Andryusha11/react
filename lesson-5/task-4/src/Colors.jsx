import React, { Component } from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  setBodyColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <div
          style={{ backgroundColor: RED }}
          className="colors__button"
          onClick={() => this.setBodyColor(RED)}
        ></div>
        <div
          style={{ backgroundColor: GREEN }}
          className="colors__button"
          onClick={() => this.setBodyColor(GREEN)}
        ></div>
        <div
          style={{ backgroundColor: BLUE }}
          className="colors__button"
          onClick={() => this.setBodyColor(BLUE)}
        ></div>
      </div>
    );
  }
}

export default Colors;
