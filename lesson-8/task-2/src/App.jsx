import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.toggle}>toggle</button>
        {this.state.visible && <Clock location={'Kiev'} offset={2} />}
        {this.state.visible && <Clock location={'London'} offset={0} />}
        {this.state.visible && <Clock location={'New York'} offset={-5} />}
      </>
    );
  }
}

export default App;
