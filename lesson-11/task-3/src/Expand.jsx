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
    const icon = this.state.isContent ? (
      <i onClick={this.hideContent} className="fas fa-chevron-up"></i>
    ) : (
      <i onClick={this.showContent} className="fas fa-chevron-down"></i>
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
