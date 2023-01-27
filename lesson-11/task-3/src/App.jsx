import React, { Component } from 'react';
import Expand from './Expand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  state = {
    isContent: false,
  };

  hideContent = () => {
    this.setState({ isContent: false });
  };
  showContent = () => {
    this.setState({ isContent: true });
  };

  render() {
    const icon = this.state.isContent ? (
      <FontAwesomeIcon icon={faChevronUp} onClick={this.hideContent} />
    ) : (
      <FontAwesomeIcon icon={faChevronDown} onClick={this.showContent} />
    );

    const expandChildElem = this.state.isContent ? (
      <div className="expand__content">
        <p>
          Hooks are a new addition in React 16.8. They let you use state and
          other React features without writing a class.
        </p>
      </div>
    ) : null;

    return (
      <div className="app">
        <Expand
          icon={icon}
          hideContent={this.hideContent}
          showContent={this.showContent}
        >
          {expandChildElem}
        </Expand>
      </div>
    );
  }
}
export default App;
