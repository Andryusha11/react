import React from 'react';
import ReactDOM from 'react-dom';
import MailBox from './MailBox';
import './index.scss';

const rootElem = document.querySelector('#root');

ReactDOM.render(<MailBox unreadedMessages={[]} />, rootElem);
