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
    const visible = this.state.visible;
    return (
      <>
        <button onClick={this.toggle}>toggle</button>
        <div className="container">
          {visible && <Clock location={'Kiev'} offset={2} />}
          {visible && <Clock location={'London'} offset={0} />}
          {visible && <Clock location={'New York'} offset={-5} />}
        </div>
      </>
    );
  }
}

export default App;
