import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  showsText = (color) => {
    this.setState({
      text: color,
    });
  };

  hidesText = () => {
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.text}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.showsText('Coral')}
            onMouseOut={this.hidesText}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.showsText('Aqua')}
            onMouseOut={this.hidesText}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.showsText('Bisque')}
            onMouseOut={this.hidesText}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
