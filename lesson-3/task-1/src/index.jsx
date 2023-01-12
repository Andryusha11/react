import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Search from './Search';

const rootElem = document.querySelector('#root');

const elem = <Search />;

ReactDOM.render(elem, rootElem);
