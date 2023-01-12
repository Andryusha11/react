import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './index.scss';

const rootElem = document.querySelector('#root');

const user = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: new Date('January 01, 2006 03:24:00'),
};

console.log(user.birthDate);

ReactDOM.render(<Greeting user={user} />, rootElem);
