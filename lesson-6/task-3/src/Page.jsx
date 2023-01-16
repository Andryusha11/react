import React, { Component } from 'react';
import Info from './Info';

const info1 = 'Price is 500$. Available in 2 colors';
const info2 = 'Price is 650$. Not available in 1 color';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
    };
  }

  setText = (info) => {
    this.setState({
      info,
    });
  };

  render() {
    return (
      <div className="page">
        <Info info={this.state.info} />
        <div className="actions">
          <button className="btn" onClick={() => this.setText(info1)}>
            IPhone 13
          </button>
          <button className="btn" onClick={() => this.setText(info2)}>
            IPhone 13 Pro
          </button>
          <button className="btn" onClick={() => this.setText('')}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
