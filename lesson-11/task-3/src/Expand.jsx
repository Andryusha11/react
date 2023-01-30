import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Expand extends Component {
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
    const { children, title } = this.props;
    const icon = this.state.isContent ? (
      <FontAwesomeIcon icon={faChevronUp} onClick={this.hideContent} />
    ) : (
      <FontAwesomeIcon icon={faChevronDown} onClick={this.showContent} />
    );
    const childElem = this.state.isContent ? children : null;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn">{icon}</button>
        </div>
        {childElem}
      </div>
    );
  }
}

export default Expand;
