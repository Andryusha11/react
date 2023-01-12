import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElem = document.querySelector('#root');

const seconds = new Date().getSeconds();

const textColor = seconds % 2 !== 0 ? '#fff' : '#000';

const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
const styles = {
  backgroundColor: backgroundColor,
  color: textColor,
};

const elem = (
  <div className="seconds" style={styles}>
    {'Now is ' + seconds}
  </div>
);

ReactDOM.render(elem, rootElem);
