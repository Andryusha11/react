import React, { Component } from 'react';

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
    const button = this.state.isContent ? (
      <button onClick={this.hideContent} className="expand__toggle-btn">
        <i className="fas fa-chevron-up"></i>
      </button>
    ) : (
      <button onClick={this.showContent} className="expand__toggle-btn">
        <i className="fas fa-chevron-down"></i>
      </button>
    );
    const childElem = this.state.isContent ? children : null;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          {button}
        </div>
        <div className="expand__content">{childElem}</div>
      </div>
    );
  }
}

export default Expand;
