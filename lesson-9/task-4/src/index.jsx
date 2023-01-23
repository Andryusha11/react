import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList';
import './index.scss';

const rootElem = document.querySelector('#root');

const users = [
  {
    name: 'Carl',
    age: 18,
    id: 1,
  },
  {
    name: 'Tom',
    age: 19,
    id: 2,
  },
  {
    name: 'Tina',
    age: 17,
    id: 3,
  },
];

ReactDOM.render(<UsersList users={users} />, rootElem);
