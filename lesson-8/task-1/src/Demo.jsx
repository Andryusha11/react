import React, { Component } from 'react';
import Life from './Life';

class Demo extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    number: (Math.random() * 100).toFixed(),
  };

  show = () => {
    this.setState({
      visible: true,
    });
  };
  hide = () => {
    this.setState({
      visible: false,
    });
  };
  update = () => {
    this.setState({
      number: (Math.random() * 100).toFixed(),
    });
  };
  render() {
    return (
      <div>
        <div>
          <button onClick={this.show}>Show</button>
          <button onClick={this.hide}>Hide</button>
          <button onClick={this.update}>Update</button>
        </div>
        {this.state.visible && <Life number={this.state.number} />}
      </div>
    );
  }
}

export default Demo;
