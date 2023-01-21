import React, { Component } from 'react';

class Dimensions extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);

    this.setDimensions(window.innerWidth, window.innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setDimensions(window.innerWidth, window.innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${width} x ${height}`;
  };

  render() {
    return (
      <>
        <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>
      </>
    );
  }
}

export default Dimensions;
