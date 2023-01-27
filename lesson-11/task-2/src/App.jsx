import React, { Component } from 'react';
import Dialog from './Dialog';

class App extends Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({ isOpen: false });
  };
  showDialog = () => {
    this.setState({ isOpen: true });
  };
  render() {
    return (
      <div className="app">
        <button onClick={this.showDialog} className="btn">
          Show dialog
        </button>
        <Dialog
          onClose={this.hideDialog}
          isOpen={this.state.isOpen}
          title={'Recommendation'}
        >
          <p>
            Use immutable array methods to work with data. It will help to avoid
            bugs
          </p>
        </Dialog>
      </div>
    );
  }
}
export default App;
