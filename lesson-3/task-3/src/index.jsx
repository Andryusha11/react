import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import './index.scss';

const rootElem = document.querySelector('#root');

const user = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com/u10001',
};

ReactDOM.render(
  <Comment
    author={user}
    text="Good job!"
    date={new Date('2019-01-01T11:32:19.556Z')}
  />,
  rootElem
);
